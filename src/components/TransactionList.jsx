import React from 'react';
import Transaction from "./Transaction";

const TransactionList = () => {
  const transactions = [];
  return (
      <div>
        {
            transactions.map(transaction => <Transaction/>)
        }
      </div>
  )
};

export default TransactionList;