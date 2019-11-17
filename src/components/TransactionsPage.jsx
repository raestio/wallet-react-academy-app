import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import TransactionListFilter from "./TransactionListFilter";
import Navigation from "./Navigation";
import TransactionList from "./TransactionList";
import Pagination from "./Pagination";
import NewTransactionButton from "./NewTransactionButton";
import {useHistory} from "react-router-dom";
import useApi from "../lib/useApi";
import useFilter from "../lib/useFilter";
import useNavigation from "../lib/useNavigation";

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #ecf4fa;
`;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Footer = styled.div`
  background-color: #ecf4fa;
  bottom: 0;
  position: absolute;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100vw;
`;

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('ALL');
  const { getTransactions, deleteTransaction } = useApi();
  const { filterTransactions } = useFilter();
  const { toTransactionDetail, toNewTransaction } = useNavigation(useHistory());

  const fetchTransactions = async () => {
    try {
      const {data} = await getTransactions();
      setTransactions(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect( () => {
    fetchTransactions();
  }, []);

  const deleteTransactionById = (transactionId) => {
    deleteTransaction(transactionId).catch(e => {console.log(e)});
    setTransactions(transactions.filter(({id}) => id !== transactionId));
  };

  return (
      <Container>

        <HorizontalContainer>
          <TransactionListFilter setFilter={setFilter}/>
          <Navigation/>
        </HorizontalContainer>

        <TransactionList
            transactions={filterTransactions(transactions, filter)}
            onTransactionClick={toTransactionDetail}
            onDeleteTransactionClick={deleteTransactionById}/>

        <Pagination/>

        <Footer>
          <NewTransactionButton onClick={toNewTransaction}/>
        </Footer>

      </Container>
  )
};


export default TransactionsPage;