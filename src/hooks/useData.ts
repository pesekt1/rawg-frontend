import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(path: string) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<Response<T>>(path)
      .then((res) => setData(res.data.results))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};

export default useData;
