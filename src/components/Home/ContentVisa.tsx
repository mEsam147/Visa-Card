import { CardInfo } from "../../types";
import { Badge } from "../ui/badge";

type Props = {
  cardData: CardInfo | null;
};
const ContentVisa = ({ cardData }: Props) => {
  // The visaData array contains objects representing visa card information.
  // This array can be used to display visa card information .
  const visaData = [
    {
      id: 1,
      title: "Card Number",
      value: (
        <div className="flex items-center  gap-x-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              className="flex items-center gap-x-2 text-md font-bold"
              key={i}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i}>&#x2022;</span>
              ))}
            </div>
          ))}
          <p className="tracking-wider text-md font-normal">
            {cardData?.last4}
          </p>
        </div>
      ),
    },
    { id: 2, title: "CVV", value: cardData?.cvc },
    {
      id: 3,
      title: "Expiration",
      value: `${cardData?.expiryMonth}/${cardData?.expiryYear}`,
    },
    { id: 4, title: "Brand", value: cardData?.brand },
    { id: 5, title: "Status", value: "Active" },
    { id: 6, title: "Cardholder", value: cardData?.cardholderName },
    { id: 9, title: "Billing address", value: "Egypt" },
  ];

  return (
    <div className="md:w-3/4 mt-7 space-y-3">
      {/* Loop Through the visaData array and display each item */}
      {visaData?.map((item) => (
        <div className="flex items-center justify-between" key={item.id}>
          <strong className="text-primary ">{item.title}</strong>
          {item.title === "Status" ? (
            <Badge
              variant={"outline"}
              className="border-muted-foreground rounded-sm text-sm"
            >
              {item.value}
            </Badge>
          ) : item.title === "Brand" ? (
            <div className="flex items-center gap-x-1 text-muted-foreground text-sm text-left">
              <p>{item.value}</p>
              <img
                src="./notEmptyVisa.png"
                className="w-8  object-cover"
                alt=""
              />
            </div>
          ) : (
            <p className="text-muted-foreground text-sm text-left ">
              {" "}
              {item.value}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentVisa;
