import { useEffect, useState } from "react";
import { getAdministrators } from "../utills/getAdministrators";

export const useAdministrationList = (queryData) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        setIsLoading(true);
        setError("");
        setIsError(false);

        const res = await getAdministrators(queryData);

        if (res?.payload.administrators.length > 0) {
          setItems((prev) => {
            return [...prev, ...res?.payload.administrators];
          });
        }
        setHasMore(res.payload.hasNext);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasMore(false);
        setIsError(true);
        setError(error.messaage);
      }
    }

    fetchItems();
  }, [queryData]);

  return {
    isLoading,
    isError,
    error,
    hasMore,
    items,
  };
};
