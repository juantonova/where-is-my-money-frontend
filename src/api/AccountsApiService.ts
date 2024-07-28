import { Account } from "../models/common";
import { ApiService } from "./ApiService";

const ACCOUNTS_URL = "/accounts";

class AccountsApiService extends ApiService {
  getAccounts = async (userId: string) => {
    try {
      const {
        data: { accounts },
      } = await this.fetch<{ accounts: Account[] }>(ACCOUNTS_URL, {
        params: { user_id: userId },
      });
      return accounts;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  createAccount = async (data: Omit<Account, "id">) => {
    try {
      const {
        data: { account },
      } = await this.fetch<{ account: Account }>(ACCOUNTS_URL, {
        method: "POST",
        data,
      });
      return account;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}

export default new AccountsApiService();
