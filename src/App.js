import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TransactionsPage from "./components/TransactionsPage";
import NotFound from "./components/NotFound";
import TransactionDetailPage from "./components/TransactionDetailPage";
import NewTransactionPage from "./components/NewTransactionPage";

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={TransactionsPage}/>
        <Route exact path={'/transactions'} component={TransactionsPage}/>
        <Route exact path={'/transactions/new'} component={NewTransactionPage}/>
        <Route exact path={'/transactions/:id'} component={TransactionDetailPage}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;