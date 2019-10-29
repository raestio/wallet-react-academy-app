import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import TransactionList from "./components/TransactionList";
import Pagination from "./components/Pagination";
import NewTransactionButton from "./components/NewTransactionButton";
import TransactionListFilter from "./components/TransactionListFilter";
import styled from "styled-components";

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

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('ALL');

  const addNewTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (transactionId) => {
    setTransactions(transactions.filter(({id}) => id !== transactionId));
  };

  const filterTransactions = () => {
    switch (filter) {
      case 'ALL': return transactions;
      case 'IN': return transactions.filter(({ amount }) => amount > 0);
      case 'OUT': return transactions.filter(({ amount }) => amount < 0);
      default: return transactions;
    }
  };

  return (
      <Container>

        <HorizontalContainer>
          <TransactionListFilter setFilter={setFilter}/>
          <Navigation/>
        </HorizontalContainer>

        <TransactionList transactions={filterTransactions()} onDeleteTransactionClick={deleteTransaction}/>

        <Pagination/>

        <Footer>
          <NewTransactionButton onNewTransaction={addNewTransaction}/>
        </Footer>

      </Container>
  )
};

export default App;