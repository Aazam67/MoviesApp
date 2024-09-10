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

interface FetchMovies {
  [key: string]: Movie;
}

const useMovies = () => {
  const [movies, setMovies] = useState<FetchMovies>({});
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchMovies>("/movies.json", { signal: controller.signal })
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { movies, error };
};
export default useMovies;
