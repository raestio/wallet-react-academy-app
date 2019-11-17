const useFilter = () => {

  const filterTransactionsInternal = (transactions, filter) => {
    switch (filter) {
      case 'ALL': return transactions;
      case 'IN': return transactions.filter(({ amount }) => amount > 0);
      case 'OUT': return transactions.filter(({ amount }) => amount < 0);
      default: return transactions;
    }
  };

  return {
    filterTransactions: (transactions, filter) => filterTransactionsInternal(transactions, filter)
  };
};

export default useFilter;
