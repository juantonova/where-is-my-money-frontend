// @ts-expect-error use react
import React from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./Loader.css";

const Loader = () => {
  return (
    <Spin
      indicator={<LoadingOutlined className="loadingIcon" />}
      size="small"
      className="loadingSpin"
    />
  );
};

export default Loader;
