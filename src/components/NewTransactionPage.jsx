import React from 'react';
import useNavigation from "../lib/useNavigation";
import {useHistory} from "react-router-dom";
import TransactionForm from "./TransactionForm";
import useApi from "../lib/useApi";

const NewTransactionPage = () => {
  const { toTransactions } = useNavigation(useHistory());
  const { createTransaction } = useApi();

  const onSave = async (newTransaction) => {
    await createTransaction(newTransaction);
    toTransactions();
  };

  return (
      <TransactionForm onSaveClick={onSave} transactionData={({})}/>
  )
};


export default NewTransactionPage;