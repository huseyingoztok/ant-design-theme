import React, { useState } from "react";
import { Layout } from "antd";
import MediumSider from "../Sider";
import MediumHeader from "../Header";
const { Content, Footer } = Layout;

function MediumLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <MediumSider collapsed={collapsed} />
        <Layout>
          <MediumHeader toggle={toggle} collapsed={collapsed} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: "80vh" }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Medium ©2020
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default MediumLayout;
