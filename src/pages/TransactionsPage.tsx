import { useState } from "react";
import TransactionsFooter from "../components/Transactions/TransactionsFooter";
import TransactionsHeader from "../components/Transactions/TransactionsHeader";
import TransactionsTable from "../components/Transactions/TransactionsTable";
import useTransactionsData from "../hooks/useTransactionsData";
import { Link } from "react-router-dom";
import { buttonVariants } from "../components/ui/button";
import { ChevronLeft } from "lucide-react";

const TransactionsPage = () => {
  const { transactions } = useTransactionsData();
  // Track current page (default: 1)
  const [currentPage, setCurrentPage] = useState(1);
  // Set results per page (default: 7)
  const [resultsPerPage] = useState(7);
  // Calculate total pages by dividing total transactions by results per page and rounding up.
  const totalPages = Math.ceil(transactions.length / resultsPerPage);
  //Calculate the starting index for the current page by adjusting for zero-based indexing.
  const startIndex = (currentPage - 1) * resultsPerPage;
  // Calculate the ending index by adding results per page to the start index.
  const endIndex = startIndex + resultsPerPage;
  // Slice transactions for current page
  const paginatedTransactions = transactions.slice(startIndex, endIndex);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="px-4 pt-1">
        <Link
          to={"/"}
          className={
            buttonVariants({ variant: "outline" }) +
            " flex items-center gap-x-2 font-semibold"
          }
        >
          <ChevronLeft className="size-5" />
          Back
        </Link>
      </div>
      <div className="max-w-5xl mx-auto py-3 ">
        {/* Header */}
        <TransactionsHeader />
        {/* Table */}
        <TransactionsTable paginatedTransactions={paginatedTransactions} />
        <TransactionsFooter
          nextPage={nextPage}
          prevPage={prevPage}
          startIndex={startIndex}
          endIndex={endIndex}
          transactions={transactions}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default TransactionsPage;
