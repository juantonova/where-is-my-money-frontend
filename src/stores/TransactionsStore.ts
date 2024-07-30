import { create } from "zustand";
import { Transaction } from "../models/common";
import TransactionsApiService from "../api/TransactionsApiService";

type State = {
  isTransactionsLoading: boolean;
  isTransactionCreateLoading: boolean;
  transactions: Transaction[];
};

type Action = {
  getTransactions: (userId: string) => Promise<void>;
  createTransaction: (transaction: Omit<Transaction, "id">) => Promise<boolean>;
};

const useTransactionsInfoStore = create<State & Action>((set) => ({
  transactions: [],
  isTransactionsLoading: false,
  isTransactionCreateLoading: false,

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
    set(() => ({
      isTransactionCreateLoading: true,
    }));
    const newTransaction =
      await TransactionsApiService.createTransaction(transactionData);
    if (newTransaction) {
      set(({ transactions }) => ({
        transactions: [...transactions, newTransaction],
        isTransactionCreateLoading: false,
      }));
      return true;
    }
    set(() => ({
      isTransactionCreateLoading: false,
    }));
    return false;
  },
}));

export default useTransactionsInfoStore;
