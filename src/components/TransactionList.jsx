import React from 'react';
import Transaction from "./Transaction";

const TransactionList = ({transactions, onDeleteTransactionClick}) => {
  return (
      <div>
        {
          transactions.map(({id, label, amount}) => <Transaction transactionId={id} label={label} amount={amount} onDeleteTransactionClick={onDeleteTransactionClick}/>)
        }
      </div>
  );
};

export default TransactionList;