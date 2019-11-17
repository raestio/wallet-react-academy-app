const useNavigation = ({push}) => {
  return {
    toTransactionDetail: transactionId => push(`/transactions/${transactionId}`),
    toNewTransaction: () => push(`/transactions/new`),
    toTransactions: () => push('/transactions')
  };
};

export default useNavigation;
