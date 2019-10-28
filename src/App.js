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

let transactionsData = [];
const App = () => {
  const [transactions, setTransactions] = useState(transactionsData);

  const addNewTransaction = (newTransaction) => {
    transactionsData.push(newTransaction);
    setTransactions([...transactionsData]);
  };

  const deleteTransaction = (transactionId) => {
    transactionsData = transactionsData.filter(({id}) => id !== transactionId);
    setTransactions(transactions.filter(t => transactionsData.includes(t)));
  };

  const filterAll = () => setTransactions([...transactionsData]);
  const filterIn = () => setTransactions(transactionsData.filter(({amount}) => amount > 0));
  const filterOut = () => setTransactions(transactionsData.filter(({amount}) => amount < 0));

  return (
      <Container>

        <HorizontalContainer>
          <TransactionListFilter onFilterAll={filterAll} onFilterIn={filterIn} onFilterOut={filterOut}/>
          <Navigation/>
        </HorizontalContainer>

        <TransactionList transactions={transactions} onDeleteTransactionClick={deleteTransaction}/>

        <Pagination/>

        <Footer>
          <NewTransactionButton onNewTransaction={addNewTransaction}/>
        </Footer>

      </Container>
  )
};

export default App;