import { useEffect, useState } from "react";
import TableProducts from "./TableProducts";
import SearchBox from "../SearchBox";
import axios from "axios";

import ModalFormProducts from "./ModalFormProducts";
import { ButtonCreate, Headbar } from "./TableProducts/styles";

const DEFAULT_PRODUCT = {
  id: "",
  name: "",
  code: "",
  price: "",
  description: "",
  thumbnail: "",
};

const ProductsDashboard = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(DEFAULT_PRODUCT);
  const [open, setOpen] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const API_URL = "https://6430c329d4518cfb0e54d5e4.mockapi.io/products";
  const onCancel = () => {
    setOpen(false);
    setFormData(DEFAULT_PRODUCT);
  };

  const onCreate = () => {
    setOpen(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setTableLoading(true);
    axios.get(`${API_URL}`).then((res) => {
      setProducts(res.data);
      setTableLoading(false);
    });
  };

  const onSubmit = (id, data) => {
    setFormLoading(true);
    if (id) {
      axios.put(`${API_URL}/${id}`, data).then((res) => {
        fetchData();
        setFormData(DEFAULT_PRODUCT);
      });
    } else {
      axios.post(`${API_URL}`, data).then((res) => {
        fetchData();
      });
    }
    setOpen(false);
  };

  const onDelete = (id) => {
    axios.delete(`${API_URL}/${id}`).then((res) => {
      fetchData();
    });
  };

  const onEdit = (id) => {
    setOpen(true);
    axios.get(`${API_URL}/${id}`).then((res) => {
      setFormData(res.data);
    });
  };

  return (
    <div>
      <Headbar>
        <ButtonCreate onClick={onCreate}>Create User</ButtonCreate>
        <SearchBox />
        <ModalFormProducts
          open={open}
          onSubmit={onSubmit}
          onCancel={onCancel}
          formData={formData}
          loading={formLoading}
        />
      </Headbar>
      <TableProducts
        products={products}
        onDelete={onDelete}
        onEdit={onEdit}
        loading={tableLoading}
      />
    </div>
  );
};

export default ProductsDashboard;
