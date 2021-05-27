import { ReactNode } from "react";

export interface TransactionsProps {
  id: number;
  title: string;
  type: string;
  category: string;
  price: number;
  createdAt: string;
}
export type TransactionInput = Omit<TransactionsProps, "id" | "createdAt">;

export interface TransactionsContextData {
  transactions: TransactionsProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export interface TransactionsProviderProps {
  children: Array<ReactNode>;
}
