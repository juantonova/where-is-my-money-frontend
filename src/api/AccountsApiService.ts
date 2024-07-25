import { Account } from "../components/models/common";
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
}

export default new AccountsApiService();
