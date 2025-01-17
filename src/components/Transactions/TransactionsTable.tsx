import { TransactionsInfo } from "../../types";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type Props = {
  paginatedTransactions: TransactionsInfo[];
};
const TransactionsTable = ({ paginatedTransactions }: Props) => {
  return (
    <div className="border-t-2 border-muted py-3">
      <Table>
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Cardholder</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Map through paginated transactions and display each transaction */}
          {paginatedTransactions.slice(0, 7).map((transaction, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">
                {transaction.amount}
              </TableCell>
              <TableCell className="uppercase">
                {transaction.currency}
              </TableCell>
              <TableCell>{transaction.cardholder}</TableCell>
              <TableCell>
                <Badge
                  variant={"outline"}
                  className="border-muted-foreground rounded-none px-4 py-1.5"
                >
                  {transaction.status}
                </Badge>
              </TableCell>
              <TableCell>{transaction.created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsTable;
