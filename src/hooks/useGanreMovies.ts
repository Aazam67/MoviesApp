import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface GenreMovies {
  id: string;
  name: string;
}

interface FetchGenreMovies {
  [key: string]: GenreMovies;
}
const useGenre = () => {
  const [genreMovies, setGenreMovies] = useState<FetchGenreMovies>({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenreMovies>("/genres.json", { signal: controller.signal })
      .then((res) => {
        setGenreMovies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { genreMovies, error, isLoading };
};
export default useGenre;
