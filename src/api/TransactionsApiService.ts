import { Transaction } from "../models/common";
import { ApiService } from "./ApiService";

const TRANSACTIONS_URL = "/transactions";

class TransactionsApiService extends ApiService {
  getTransactions = async (userId: string) => {
    try {
      const {
        data: { transactions },
      } = await this.fetch<{ transactions: Transaction[] }>(TRANSACTIONS_URL, {
        params: { user_id: userId },
      });
      return transactions;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
}

export default new TransactionsApiService();
