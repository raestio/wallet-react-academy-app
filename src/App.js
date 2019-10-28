import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import TransactionList from "./components/TransactionList";
import Pagination from "./components/Pagination";
import NewTransactionButton from "./components/NewTransactionButton";
import TransactionListFilter from "./components/TransactionListFilter";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addNewTransaction = (newTransaction) => setTransactions([...transactions, newTransaction]);

  return (
      <div>
        <TransactionListFilter/>
        <Navigation/>
        <TransactionList transactions={transactions}/>
        <Pagination/>
        <NewTransactionButton onNewTransaction={addNewTransaction}/>
      </div>
  )
};

export default App;