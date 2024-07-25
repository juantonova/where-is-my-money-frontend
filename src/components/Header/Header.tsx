import React, { useState } from "react";
import {
  HomeOutlined,
  AccountBookOutlined,
  TransactionOutlined,
  GoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./Header.css";

type MenuItemType = Required<MenuProps>["items"][number];

const items: MenuItemType[] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Accounts",
    key: "accounts",
    icon: <AccountBookOutlined />,
  },
  {
    label: "Transactions",
    key: "transactions",
    icon: <TransactionOutlined />,
  },
  {
    label: "Categories",
    key: "categories",
    icon: <GoldOutlined />,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      className="headerMenu"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
