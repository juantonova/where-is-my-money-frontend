import { create } from "zustand";
import { Transaction } from "../models/common";
import TransactionsApiService from "../api/TransactionsApiService";

type State = {
  isTransactionsLoading: boolean;
  transactions: Transaction[];
};

type Action = {
  getTransactions: (userId: string) => Promise<void>;
  createTransaction: (transaction: Omit<Transaction, "id">) => Promise<boolean>;
};

const useTransactionsInfoStore = create<State & Action>((set) => ({
  transactions: [],
  isTransactionsLoading: false,

  getTransactions: async (userId: string) => {
    set(() => ({
      isTransactionsLoading: true,
    }));

    const transactions = await TransactionsApiService.getTransactions(userId);

    set(() => ({
      transactions,
      isTransactionsLoading: false,
    }));
  },

  createTransaction: async (transactionData: Omit<Transaction, "id">) => {
    const newTransaction =
      await TransactionsApiService.createTransaction(transactionData);
    if (newTransaction) {
      set(({ transactions }) => ({
        transactions: [...transactions, newTransaction],
      }));
      return true;
    }
    return false;
  },
}));

export default useTransactionsInfoStore;
