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
    <div className="py-3 flex items-center justify-between">
      <div>
        Viewing {startIndex + 1}-{endIndex} of {transactions.length} Results
      </div>
      <div className="flex items-center gap-x-2">
        <Button
          variant={"outline"}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <Button
          variant={"outline"}
          disabled={currentPage >= totalPages}
          onClick={nextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TransactionsFooter;
