import React, { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  const parseAmount = (val) => {
    if (!val || val.trim() === "") return 0;
    const n = Number(val);
    return isNaN(n) ? 0 : n;
  };

  const addIncome = (title, amount) => {
    const newIncome = {
      id: Date.now(),
      type: "income",
      title,
      amount: parseAmount(amount),
      date: new Date().toISOString().split("T")[0],
    };
    setTransactions((prev) => [newIncome, ...prev]);
  };

  const addExpense = (title, amount) => {
    const newExpense = {
      id: Date.now(),
      type: "expense",
      title,
      amount: parseAmount(amount),
      date: new Date().toISOString().split("T")[0],
    };
    setTransactions((prev) => [newExpense, ...prev]);
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + parseAmount(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + parseAmount(t.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addIncome,
        addExpense,
        totalIncome,
        totalExpense,
        balance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}
