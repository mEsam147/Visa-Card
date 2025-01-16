import { CardInfo } from "../../types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {
  cardData: CardInfo | null;
};

const HeaderContent = ({ cardData }: Props) => {
  const visaData = [
    { id: 1, name: "Cardholder", value: cardData?.cardholderName || "" },
    {
      id: 2,
      name: "Expiry Date",
      value: `${cardData?.expiryMonth} / ${cardData?.expiryYear}`,
    },
    { id: 3, name: "CVC", value: cardData?.cvc },
  ];

  return (
    <>
      <div className="mb-7">
        <Select value={cardData?.cardholderName || ""}>
          <SelectTrigger className="w-full border border-muted-foreground rounded-none outline-none focus:outline-none focus:border-none shadow">
            <SelectValue>
              <div className="flex items-center gap-x-2">
                <img
                  src="./notEmptyVisa.png"
                  className="w-8  object-cover"
                  alt=""
                />
                {cardData?.cardholderName || "Cardholder"}
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* Use cardholderName as the value for SelectItem */}
              <SelectItem
                value={cardData?.cardholderName as string}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-x-3">
                  <img
                    src="./notEmptyVisa.png"
                    className="w-8  object-cover"
                    alt=""
                  />
                  {cardData?.cardholderName}
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className=" border border-muted-foreground p-3 md:p-5 flex flex-col justify-between h-[40vh] shadow rounded-sm">
        <div className="flex justify-end items-end">
          <img
            src="./emptyVisa.png"
            className="w-40 h-16 object-cover"
            alt=""
          />
        </div>
        <div className="flex items-center gap-x-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              className="flex items-center gap-x-2 text-2xl font-bold"
              key={i}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i}>&#x2022;</span>
              ))}
            </div>
          ))}
          <strong className="tracking-wider text-lg font-normal">
            {cardData?.last4}
          </strong>
        </div>
        <div className="flex items-center justify-between">
          {visaData.map((item) => (
            <div className="flex flex-col items-center gap-y-1" key={item.id}>
              <strong className="text-primary  text-sm">
                {item.name}
              </strong>
              <span className="text-muted-foreground  ">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
