import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: string;
  name: string;
}

interface FetchGenres {
  [key: string]: Genre;
}
const useGenre = () => {
  const [genres, setGenres] = useState<FetchGenres>({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenres>("/genres.json", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};
export default useGenre;
