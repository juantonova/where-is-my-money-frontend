import React, { useState } from "react";
import {
  HomeOutlined,
  AccountBookOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./Header.css";
import { useNavigate } from "react-router-dom";

type MenuItemType = Required<MenuProps>["items"][number];

const items: MenuItemType[] = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "Accounts",
    key: "/accounts",
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

  const navigate = useNavigate()

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
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
