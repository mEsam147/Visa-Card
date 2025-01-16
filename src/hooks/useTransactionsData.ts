import { useState } from "react";
import data from "../data/transactions/transactionsData.json";
import { TransactionsInfo } from "../types";

const useTransactionsData = () => {
  const [transactions] = useState<TransactionsInfo[]>(data);

  return { transactions };
};

export default useTransactionsData;
