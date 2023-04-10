// import { useLocation } from "react-router-dom";
import { Sidebar, Main, Header, Content, Layout, Logo, Title, ToggleSidebarButton, MenuItem} from "./styles";
import AuthUser from "./AuthUser";
import { BoxPlotOutlined, MenuFoldOutlined, RadarChartOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";



const PrivateLayout = ({ children, title }) => {
  const [className, setClassName] = useState("");
  // const [activeMenu, setActiveMenu] = useState("users");
  // const location = useLocation();

  const toggleSidebar = () =>{
    setClassName(className === "active" ? "" : "active");
  }

  // const toggleMenu = async (e) => {
  //   const pathName = await location.pathname.substring(1);
  //   console.log(e.target.name + " " + pathName);
  // }

  return (
    <Layout className={className}>
      <Sidebar >
        <Logo>{className==="active"?<RadarChartOutlined />:"Dashboard"}</Logo>
        <MenuItem to="/admin/users"><UserOutlined /> Users</MenuItem>
        <MenuItem to="/admin/products"><BoxPlotOutlined /> Products</MenuItem>
      </Sidebar>
      <Main>
        <Header>
          <Title>
            <ToggleSidebarButton onClick={toggleSidebar}><MenuFoldOutlined/></ToggleSidebarButton>
            {title}
          </Title>
          <AuthUser/>
        </Header>
        <Content>{children}</Content>
      </Main>
    </Layout>
  );
};

export default PrivateLayout;
