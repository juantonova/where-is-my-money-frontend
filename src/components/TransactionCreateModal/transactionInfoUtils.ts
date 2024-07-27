import { Account, Category, TransactionType } from "../../models/common";

export const getCategoriesOptions = (
  categories: Category[],
  type?: TransactionType,
) => {
  return categories
    .filter((category) => category.type === type)
    .map((category) => ({ value: category.id, label: category.name }));
};

export const getAccountsOptions = (accounts: Account[]) => {
  return accounts.map((account) => ({
    value: account.id,
    label: account.name,
  }));
};
