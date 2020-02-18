
import React from "react";
import './index.less';
import { Layout, Icon } from 'antd';
const { Header } = Layout;

function MediumHeader() {
  return (
    <>
      <Header style={{ background: "#fff", padding: 0 }}>
        <Icon className="trigger" type={"menu-unfold"} />
      </Header>
    </>
  );
}

export default MediumHeader;
