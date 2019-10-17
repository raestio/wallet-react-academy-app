import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import TransactionList from "./components/TransactionList";
import Pagination from "./components/Pagination";
import NewTransactionButton from "./components/NewTransactionButton";

const App = () => (
    <div>
      <Navigation/>
      <TransactionList/>
      <Pagination/>
      <NewTransactionButton/>
    </div>
);

export default App;