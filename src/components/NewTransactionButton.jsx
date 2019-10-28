import React from 'react';

const NewTransactionButton = ({onNewTransaction}) => {

  const generateTransaction = () => ({
    id: Math.random().toString(),
    label: `Transaction ${Math.floor(Math.random() * 1000)}`,
    amount: getRandomAmount()
  });
  const getRandomAmount = () => Math.floor(Math.random() * 10000 * randPlusOrMinus());
  const randPlusOrMinus = () => Math.random() < 0.5 ? -1 : 1;

  return (
      <button onClick={() => {
        const newTransaction = generateTransaction();
        onNewTransaction(newTransaction);
      }}>
        Add new
      </button>
  );
};

export default NewTransactionButton;