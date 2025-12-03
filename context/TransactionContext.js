import React, { createContext, useState, useContext } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addIncome = (amount, note) => {
    setTransactions((prev) => [
      {
        id: Date.now(),
        type: "income",
        amount: Number(amount),
        note: note || "",
        date: new Date().toLocaleDateString(),
      },
      ...prev,
    ]);
  };

  const addExpense = (amount, note) => {
    setTransactions((prev) => [
      {
        id: Date.now(),
        type: "expense",
        amount: Number(amount),
        note: note || "",
        date: new Date().toLocaleDateString(),
      },
      ...prev,
    ]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addIncome, addExpense }}>
      {children}
    </TransactionContext.Provider>
  );
};

// hook for easier consumption
export function useTransactions() {
  return useContext(TransactionContext);
}
