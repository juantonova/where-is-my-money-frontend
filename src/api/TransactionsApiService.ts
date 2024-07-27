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

  createTransaction = async (data: Omit<Transaction, "id">) => {
    try {
      const {
        data: { transaction },
      } = await this.fetch<{ transaction: Transaction }>(TRANSACTIONS_URL, {
        method: "POST",
        data,
      });
      return transaction;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}

export default new TransactionsApiService();
