import { ArgsProps } from "antd/es/message";

export const USER_ID = "1";

export const CREATE_TRANSACTION_SUCCESS_MESSAGE = {
  type: "success",
  content: "Транзакция успешно добавлена",
} as ArgsProps;

export const CREATE_ACCOUNT_SUCCESS_MESSAGE = {
  type: "success",
  content: "Аккаунт успешно добавлен",
} as ArgsProps;

export const ERROR_MESSAGE = {
  type: "error",
  content: "Что-то пошло не так. Попробуйте еще раз.",
} as ArgsProps;