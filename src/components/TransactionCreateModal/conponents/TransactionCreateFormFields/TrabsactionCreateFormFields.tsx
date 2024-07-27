import React, { useState } from "react";

import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
  RadioChangeEvent,
  Select,
} from "antd";
import { Transaction, TransactionType } from "../../../../models/common";
import useCategoriesInfoStore from "../../../../stores/CategoriesStore";
import useAccountsInfoStore from "../../../../stores/AccountsStore";
import {
  getAccountsOptions,
  getCategoriesOptions,
} from "../../transactionInfoUtils";

type FieldType = Omit<Transaction, "id">;

const TransactionCreateFormFields: React.FC = () => {
  const { categories } = useCategoriesInfoStore();
  const { accounts } = useAccountsInfoStore();

  const [transactionType, setTransactionType] = useState(
    TransactionType.EXPENSE,
  );

  const handleTypeChange = (e: RadioChangeEvent) =>
    setTransactionType(e.target.value);

  return (
      <>
        <Form.Item<FieldType> label="Type" name="type" rules={[{ required: true }]}>
          <Radio.Group
            buttonStyle="solid"
            onChange={handleTypeChange}
          >
            <Radio.Button value={TransactionType.EXPENSE}>Expense</Radio.Button>
            <Radio.Button value={TransactionType.REVENUE}>Income</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item<FieldType>
          label="Category"
          name="category_id"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Choose category"
            options={getCategoriesOptions(categories, transactionType)}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="Account"
          name="account_id"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Choose account"
            options={getAccountsOptions(accounts)}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="Sum"
          name="sum"
          rules={[{ required: true }]}
        >
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

export default TransactionCreateFormFields;
