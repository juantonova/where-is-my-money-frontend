import React from "react";

import {
  Form,
  Modal,
  message,
} from "antd";
import useModalsStore from "../../stores/ModalsStore";
import { Transaction } from "../../models/common";
import useTransactionsInfoStore from "../../stores/TransactionsStore";
import {
  CREATE_TRANSACTION_SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  USER_ID,
} from "../../consts";
import TransactionCreateFormFields from "./conponents/TransactionCreateFormFields";

type FieldType = Omit<Transaction, "id">;

const TransactionCreateModal: React.FC = () => {
  const { isTransactionCreateModalOpen, setIsTransactionCreateModalOpen } =
    useModalsStore();
  const { createTransaction } = useTransactionsInfoStore();

  const [messageApi, contextHolder] = message.useMessage()
  const handleSuccess = () =>
    messageApi.open(CREATE_TRANSACTION_SUCCESS_MESSAGE);
  const handleError = () => messageApi.open(ERROR_MESSAGE);

  const handleCancel = () => setIsTransactionCreateModalOpen(false);


  const handleFinish = (e: FieldType) => {
    createTransaction({ ...e, user_id: Number(USER_ID), date: new Date().toLocaleDateString('en-CA') }).then((result: boolean) =>
     result ? handleSuccess() : handleError()
    );
  };

  return (
    <Modal
      title="Add transaction"
      open={isTransactionCreateModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      {contextHolder}
      <Form
        name="create_transaction"
        labelCol={{ span: 8 }}
        layout="vertical"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={handleFinish}
        onFinishFailed={handleError}
      >
        <TransactionCreateFormFields />
      </Form>
    </Modal>
  );
};

export default TransactionCreateModal;
