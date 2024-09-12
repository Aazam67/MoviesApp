import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface Movie {
  cast: string[];
  director: string;
  directorId: string;
  genres: string[];
  imageUrl: string;
  releaseYear: number;
  score: number;
  summary: string;
  title: string;
}

interface Request {
  movieId?: string;
  title?: string;
}
export interface FetchMovies {
  [key: string]: Movie;
}

const useMovies = ({ movieId, title }: Request) => {
  const [movies, setMovies] = useState<FetchMovies>({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    var requestParam = movieId
      ? `?orderBy="$key"&equalTo="${movieId}"`
      : title
      ? `?orderBy="title"&equalTo="${title}"`
      : "";

    apiClient
      .get<FetchMovies>(`/movies.json${requestParam}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { movies, error, isLoading };
};
export default useMovies;
