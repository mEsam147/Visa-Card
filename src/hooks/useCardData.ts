import axios from "axios";
import { useEffect, useState } from "react";
import { CardInfo } from "../types";

const useCardData = () => {
const [cardData, setCardData] = useState<CardInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await axios
        .get("https://www.bakarcompany.somee.com/api/IssueCard/get-card-data")
        .then((res) => {
          setCardData(res.data);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  return { cardData, loading };
};

export default useCardData;
