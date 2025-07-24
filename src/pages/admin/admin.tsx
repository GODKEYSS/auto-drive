import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  CarOutlined,
  ShoppingCartOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const { Sider, Content, Header } = Layout;

const AdminDashboard: React.FC = () => {
  const [selectedKey, setSelectedKey] = React.useState("dashboard");

  const renderContent = () => {
    switch (selectedKey) {
      case "users":
        return <div>Users Management (Coming Soon)</div>;
      case "cars":
        return <div>Cars Management (Coming Soon)</div>;
      case "orders":
        return <div>Orders Management (Coming Soon)</div>;
      default:
        return <div>Welcome to the Admin Dashboard</div>;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div style={{ height: 32, margin: 16, color: "white", fontWeight: "bold", fontSize: 18 }}>
          Admin
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key as string)}
          items={[
            {
              key: "dashboard",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "users",
              icon: <UserOutlined />,
              label: "Users",
            },
            {
              key: "cars",
              icon: <CarOutlined />,
              label: "Cars",
            },
            {
              key: "orders",
              icon: <ShoppingCartOutlined />,
              label: "Orders",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0, textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          Admin Dashboard
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>{renderContent()}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
