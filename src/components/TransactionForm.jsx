import React, {useState, useEffect} from 'react';

const TransactionForm = ({onSaveClick, transactionData}) => {
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    setTransaction(transactionData);
  }, [transactionData]);


  const onLabelChange = (value) => {
    setTransaction({...transaction, label: value});
  };

  const onAmountChange = (value) => {
    setTransaction({...transaction, amount: value});
  };

  const onSave = () => {
    if (transaction.label && transaction.amount) {
      onSaveClick(transaction);
    }
  };

  return (
      <div>
        <input type='text' value={transaction.label || ''} onChange={(e) => onLabelChange(e.target.value)}/>
        <input type='number' value={transaction.amount || 0} onChange={(e) => onAmountChange(e.target.value)}/>
        <button onClick={onSave}>Save</button>
      </div>
  )
};

export default TransactionForm;