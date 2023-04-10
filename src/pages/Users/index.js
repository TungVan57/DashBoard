import UsersDashboard from "../../components/UsersDashboard";
import Layout from "../../layouts/Private";

const Users = () => {
  return (
    <Layout title={"Users Management"}>
      <UsersDashboard />
    </Layout>
  );
};

export default Users;
