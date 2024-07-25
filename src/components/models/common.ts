export const enum TransactionType {
  REVENUE = "revenue",
  EXPENSE = "expense",
}

export const enum AccountType {
  CREDIT = "credit",
  DEBIT = "debit",
  SAVINGS = "savings",
}

export const enum Currency {
  RUBLE = "rub",
  EURO = "eur",
  DOLLAR = "usd",
}

export type Account = {
  id: number;
  user_id: number;
  type: AccountType;
  name: string;
  sum: number;
  currency: Currency;
};

export type Category = {
  id: number;
  user_id: number;
  type: TransactionType;
  name: string;
};

export type Transaction = {
  id: number;
  account_id: number;
  user_id: number;
  category_id: number;
  type: TransactionType;
  sum: number;
  date: string;
  name: string | null;
};

export type User = {
  id: number;
  login: string;
  password: string;
  name: string | null;
};


export const enum AppRoutes {
  HOME = "/",
  ACCOUNTS = "/accounts",
  TRANSACTIONS = "/transactions",
}