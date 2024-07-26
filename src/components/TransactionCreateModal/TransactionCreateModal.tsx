import React, { useState } from "react";

import { Input, InputNumber, Modal, Radio, RadioChangeEvent, Select } from "antd";
import useModalsStore from "../../stores/ModalsStore";
import { Account, Category, Transaction, TransactionType } from "../../models/common";
import useCategoriesInfoStore from "../../stores/CategoriesStore";
import { USER_ID } from "../../consts";
import useAccountsInfoStore from "../../stores/AccountsStore";

const getCategoriesOptions = (
  categories: Category[],
  type?: TransactionType,
) => {
  return categories
    .filter((category) => category.type === type)
    .map((category) => ({ value: category.id, label: category.name }));
};
const getAccountsOptions = (accounts: Account[]) => {
    return accounts
      .map((account) => ({ value: account.id, label: account.name }));
  };
  

const initialTransaction: Partial<Transaction> = {
    type: TransactionType.EXPENSE,
    user_id: Number(USER_ID),
}

const TransactionCreateModal: React.FC = () => {
  const { isTransactionCreateModalOpen, setIsTransactionCreateModalOpen } =
    useModalsStore();

  const { categories } = useCategoriesInfoStore();
  const { accounts } = useAccountsInfoStore();
  const [transaction, setTransaction] = useState(initialTransaction);

  const handleCancel = () => {
    setIsTransactionCreateModalOpen(false);
  };

  const handleTypeChange = (e: RadioChangeEvent) => setTransaction((t) => ({ ...t, type: e.target.value}));
  const handleCategoryChange = (value: number) => setTransaction((t) => ({ ...t, category_id: value}));
  const handleAccountChange = (value: number) => setTransaction((t) => ({ ...t, account_id: value}));

  const handleOk = () => console.log(2);

  return (
    <Modal
      title="Add transaction"
      open={isTransactionCreateModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <span>Type:</span>
      <Radio.Group
        defaultValue={transaction.type}
        buttonStyle="solid"
        onChange={handleTypeChange}
      >
        <Radio.Button value={TransactionType.EXPENSE}>Expense</Radio.Button>
        <Radio.Button value={TransactionType.REVENUE}>Income</Radio.Button>
      </Radio.Group>
      <div>
      Category:
      <Select
        defaultValue={transaction.category_id}
        placeholder="Choose category"
        onChange={handleCategoryChange}
        options={getCategoriesOptions(categories, transaction.type)}
      />
      </div>
      <div>
      Account:
      <Select
        defaultValue={transaction.account_id}
        placeholder="Choose account"
        onChange={handleAccountChange}
        options={getAccountsOptions(accounts)}
      />
      </div>
      <div>
      Sum:
      <InputNumber addonAfter="$" defaultValue={100} />
      </div>
      <div>
      Name:
      <Input />
      </div>

    </Modal>
  );
};

export default TransactionCreateModal;
