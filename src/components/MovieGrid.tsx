import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

interface Movie {
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

const MovieGrid = () => {
  const [movies, setMovies] = useState<FetchMovies>({});
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchMovies>("/movies.json")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <ul>
      {Object.keys(movies).map((key) => (
        <li key={key}>{movies[key].title}</li>
      ))}
    </ul>
  );
};

export default MovieGrid;
