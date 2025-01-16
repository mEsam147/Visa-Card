import { ChevronRight, Loader2 } from "lucide-react";
import Buttons from "../components/Home/Buttons";
import ContentVisa from "../components/Home/ContentVisa";
import HeaderVisa from '../components/Home/HeaderVisa';
import useCardData from "../hooks/useCardData";
import {  buttonVariants } from "../components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { cardData,loading } = useCardData();
  if (loading) {
    return <div className="flex items-center justify-center h-screen">
    <Loader2 className="animate-spin size-6"/>
  </div>;
}
  return (
    <>
      <div className="flex justify-end items-end px-4 pt-1">
        <Link
          to={"/transactions"}
          className={
            buttonVariants({ variant: "outline" }) +
            "  flex items-center gap-x-2 font-semibold"
            
          }
        >
          Transactions
          <ChevronRight className="size-5"/>
        </Link>
      </div>
      <div className="max-w-xl mx-auto my-10 px-5 sm:px-0">
        <HeaderVisa cardData={cardData} />
        <ContentVisa cardData={cardData} />
        <Buttons />
      </div>
    </>
  );
};

export default HomePage;
