import { TransactionsInfo } from "../../types";
import { Button } from "../ui/button";

type Props = {
  nextPage: () => void;
  prevPage: () => void;
  startIndex: number;
  endIndex: number;
  transactions: TransactionsInfo[];
  currentPage: number;
  totalPages: number;
};
const TransactionsFooter = ({
  nextPage,
  prevPage,
  startIndex,
  endIndex,
  transactions,
  currentPage,
  totalPages,
}: Props) => {
  return (
    // Pagination controls and results count

    <div className="py-3 flex items-center justify-between">
      {/* Display current results range and total results count */}
      <div>
        Viewing {startIndex + 1}-{endIndex} of {transactions.length} Results
      </div>
      {/* Pagination buttons */}
      <div className="flex items-center gap-x-2">
        {/* Previous page button */}
        <Button
          variant={"outline"}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        {/* Next page button */}
        <Button
          variant={"outline"}
          disabled={currentPage >= totalPages}
          // Disable if on last page
          onClick={nextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TransactionsFooter;
