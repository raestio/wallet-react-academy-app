import React from 'react';
import Transaction from "./Transaction";

const TransactionList = ({transactions}) => {
  return (
      <div>
        {
          transactions.map(({label, amount}) => <Transaction label={label} amount={amount}/>)
        }
      </div>
  );
};

export default TransactionList;