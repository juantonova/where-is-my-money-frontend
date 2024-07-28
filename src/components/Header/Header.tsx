import React, { useState } from "react";
import {
  HomeOutlined,
  AccountBookOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./Header.css";

type MenuItemType = Required<MenuProps>["items"][number];

const items: MenuItemType[] = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "Accounts",
    key: "accounts",
    icon: <AccountBookOutlined />,
  },
  {
    label: "Money",
    key: "/transactions",
    icon: <TransactionOutlined />,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    window.location.assign(e.key);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
