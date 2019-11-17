import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import TransactionForm from "./TransactionForm";
import useApi from "../lib/useApi";
import useNavigation from "../lib/useNavigation";
import {useHistory} from "react-router-dom";

const TransactionDetailPage = () => {
  const { id } = useParams();
  const { getTransactionById, updateTransaction } = useApi();
  const [transaction, setTransaction] = useState({});
  const { toTransactions } = useNavigation(useHistory());

  const fetchTransactionById = async (transactionId) => {
    try {
      const {data} = await getTransactionById(transactionId);
      setTransaction(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTransactionById(id);
  }, [id]);

  const onSave = async (newTransaction) => {
    try {
      await updateTransaction(transaction.id, newTransaction);
      toTransactions();
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <TransactionForm onSaveClick={onSave} transactionData={transaction}/>
  )
};

export default TransactionDetailPage;