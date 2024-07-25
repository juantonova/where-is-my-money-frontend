import { create } from "zustand";
import AccountsApiService from "../api/AccountsApiService";
import { Account } from "../components/models/common";
import { addThousandSeparators } from "../utils/addThousandSeparators";

const calculateAccountsSum = (accounts: Account[]) => {
  const sum = accounts.reduce((sum, el) => sum + el.sum, 0);
  return addThousandSeparators(sum);
};

type State = {
  isAccountsLoading: boolean;
  accounts: Account[];
  accountSum: string;
};

type Action = {
  getAccounts: (userId: string) => Promise<void>;
};

const useAccountsInfoStore = create<State & Action>((set) => ({
  accounts: [],
  accountSum: "-",
  isAccountsLoading: false,
  getAccounts: async (userId: string) => {
    set(() => ({
      isAccountsLoading: true,
    }));
    const accounts = await AccountsApiService.getAccounts(userId);
    set(() => ({
      accounts,
      accountSum: calculateAccountsSum(accounts),
      isAccountsLoading: false,
    }));
  },
}));

export default useAccountsInfoStore;
