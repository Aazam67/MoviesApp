import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface GenreMovie {
  [x: string]: any;
  movieId: string;
  movieName: string;
}

interface Request {
  genreId?: string;
}

interface FetchGenres {
  [key: string]: GenreMovie;
}
const useGenre = ({ genreId }: Request) => {
  const [genres, setGenres] = useState<FetchGenres>({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    var requestParam = genreId ? `?orderBy="$key"&equalTo="${genreId}"` : "";
    apiClient
      .get<FetchGenres>(`/genres.json${requestParam}`, {
        signal: controller.signal,
      })
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
