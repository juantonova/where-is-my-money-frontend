import React from "react";

import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
} from "antd";
import { Account, AccountType } from "../../../../models/common";

type FieldType = Omit<Account, "id">;

const AccountCreateFormFields: React.FC = () => {
  return (
    <>
      <Form.Item<FieldType>
        label="Type"
        name="type"
        rules={[{ required: true }]}
      >
        <Radio.Group buttonStyle="solid">
          <Radio.Button value={AccountType.CREDIT}>Credit</Radio.Button>
          <Radio.Button value={AccountType.DEBIT}>Debit</Radio.Button>
          <Radio.Button value={AccountType.SAVINGS}>Savings</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item<FieldType> label="Sum" name="sum" rules={[{ required: true }]}>
        <InputNumber addonAfter="₽" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item key="submit" style={{ textAlign: "end" }}>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </>
  );
};

export default AccountCreateFormFields;
