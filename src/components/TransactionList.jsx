import React from 'react';
import Transaction from "./Transaction";

const TransactionList = ({transactions, onTransactionClick, onDeleteTransactionClick}) => {
  return (
      <div>
        {
          transactions.map(({id, label, amount}) =>
              <Transaction
                key={id}
                label={label}
                amount={amount}
                onDelete={(e) => {
                  e.stopPropagation();
                  onDeleteTransactionClick(id);
                }}
                onClick={() => onTransactionClick(id)}
              />
          )
        }
      </div>
  );
};

export default TransactionList;