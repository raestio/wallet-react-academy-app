import Axios from "axios";

const useApi = () => {
  const axiosInstance = Axios.create({
    baseURL: "http://localhost:3001"
  });

  return {
    createTransaction: newTransaction => axiosInstance.post('/transactions', newTransaction),

    getTransactions: () => axiosInstance.get('/transactions'),
    getTransactionById: transactionId => axiosInstance.get(`/transactions/${transactionId}`),

    updateTransaction: (id, newTransaction) => axiosInstance.put(`/transactions/${id}`, newTransaction),

    deleteTransaction: transactionId => axiosInstance.delete(`/transactions/${transactionId}`)
  };
};

export default useApi;
