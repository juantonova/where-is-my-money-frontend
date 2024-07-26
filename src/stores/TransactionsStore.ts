import { create } from "zustand";
import { Transaction } from "../models/common";
import TransactionsApiService from "../api/TransactionsApiService";

type State = {
  isTransactionsLoading: boolean;
  transactions: Transaction[];
};

type Action = {
  getTransactions: (userId: string) => Promise<void>;
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
}));

export default useTransactionsInfoStore;
