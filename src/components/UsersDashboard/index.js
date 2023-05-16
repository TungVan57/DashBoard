import { useEffect, useState } from "react";
import TableUsers from "./TableUsers";
import axios from "axios";
import ModalFormUsers from "./ModalFormUsers";
import { ButtonCreate, Headbar } from "./TableUsers/styles";
import SearchBox from "../SearchBox";
import { useLocation } from "react-router-dom";

const DEFAULT_USER = {
  id: "",
  name: "",
  email: "",
  phone: "",
  status: "",
  avatar: "",
};

const UsersDashboard = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(DEFAULT_USER);
  const [open, setOpen] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const baseUrl = "https://6430c329d4518cfb0e54d5e4.mockapi.io/users";
  const onCancel = () => {
    setOpen(false);
    setFormData(DEFAULT_USER);
  };

  const onCreate = () => {
    setOpen(true);
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  const fetchData = () => {
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.has("keyword")
      ? searchParams.get("keyword")
      : "";
    const page = searchParams.has("page") ? searchParams.get("page") : "1";
    const limit = searchParams.has("limit") ? searchParams.get("limit") : "500";
    setTableLoading(true);
    axios
      .get(`${baseUrl}?keyword=${keyword}&page=${page}&limit=${limit}`)
      .then((res) => {
        setUsers(res.data);
        setTableLoading(false);
      });
  };

  const onSubmit = (id, data) => {
    setFormLoading(true);
    if (id) {
      axios.put(`${baseUrl}/${id}`, data).then((res) => {
        fetchData();
        setFormData(DEFAULT_USER);
      });
    } else {
      axios.post(`${baseUrl}`, data).then((res) => {
        fetchData();
      });
    }
    setOpen(false);
  };

  const onDelete = (id) => {
    axios.delete(`${baseUrl}/${id}`).then((res) => {
      fetchData();
    });
  };

  const onEdit = (id) => {
    setOpen(true);
    axios.get(`${baseUrl}/${id}`).then((res) => {
      setFormData(res.data);
    });
  };

  const onChange = (e) => {};

  return (
    <div>
      <Headbar>
        <ButtonCreate onClick={onCreate}>Create User</ButtonCreate>
        <SearchBox />
        <ModalFormUsers
          open={open}
          onSubmit={onSubmit}
          onCancel={onCancel}
          formData={formData}
          loading={formLoading}
        />
      </Headbar>
      <TableUsers
        users={users}
        onDelete={onDelete}
        onEdit={onEdit}
        loading={tableLoading}
      />
    </div>
  );
};

export default UsersDashboard;
