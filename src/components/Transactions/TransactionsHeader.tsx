import { Button } from "../ui/button";

const TransactionsHeader = () => {
  return (
    <div className="flex items-center justify-between  py-3">
      <div className="flex items-center gap-x-2 md:gap-x-10  py-3 border-x-2  md:border-x-4 border-muted   md:px-9">
        <p className="text-muted-foreground/60  md:text-xl ">Transactions</p>
        <p className="md:text-xl  text-primary font-normal">Issued cards</p>
      </div>
      <div className="flex items-center gap-x-1">
        <Button
          variant={"outline"}
          className="rounded-none text-xs md:text-md text-primary"
        >
          Download
        </Button>
        <Button
          variant={"outline"}
          className="rounded-none text-xs md:text-md text-primary "
        >
          Filter
        </Button>
      </div>
    </div>
  );
}

export default TransactionsHeader
