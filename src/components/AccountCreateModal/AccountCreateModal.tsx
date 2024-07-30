import React from "react";

import { Form, Modal, message } from "antd";
import useModalsStore from "../../stores/ModalsStore";
import { Account, Currency } from "../../models/common";
import {
  CREATE_ACCOUNT_SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  USER_ID,
} from "../../consts";
import useAccountsInfoStore from "../../stores/AccountsStore";
import AccountCreateFormFields from "./components/AccountCreateFormFields";

type FieldType = Omit<Account, "id">;

const AccountCreateModal: React.FC = () => {
  const { isAccountCreateModalOpen, setIsAccountCreateModalOpen } =
    useModalsStore();
  const { createAccount, getAccounts } = useAccountsInfoStore();

  const [messageApi, contextHolder] = message.useMessage();
  const handleSuccess = () => messageApi.open(CREATE_ACCOUNT_SUCCESS_MESSAGE);
  const handleError = () => messageApi.open(ERROR_MESSAGE);

  const handleCancel = () => setIsAccountCreateModalOpen(false);

  const handleFinish = (e: FieldType) => {
    createAccount({
      ...e,
      user_id: Number(USER_ID),
      currency: Currency.RUBLE,
    }).then((result: boolean) => {
      result ? handleSuccess() : handleError();
      setIsAccountCreateModalOpen(false);
      getAccounts(USER_ID);
    });
  };

  return (
    <Modal
      title="Add account"
      open={isAccountCreateModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      {contextHolder}
      <Form
        name="create_account"
        labelCol={{ span: 8 }}
        layout="vertical"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={handleFinish}
        onFinishFailed={handleError}
      >
        <AccountCreateFormFields />
      </Form>
    </Modal>
  );
};

export default AccountCreateModal;
