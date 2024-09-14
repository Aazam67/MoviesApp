import useGenre from "../../hooks/useGenre";
import useMovies from "../../hooks/useMovies";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieGrid from "../movies/MovieGrid";

const GenreMovies = () => {
  const { genreId } = useParams();
  const { genres } = useGenre({ genreId: genreId });
  const { movies, error, isLoading } = useMovies({});
  const [filteredMovies, setFilteredMovies] = useState({});

  useEffect(() => {
    if (Object.keys(genres).length && genreId) {
      const filtered = Object.keys(movies)
        .filter((movieId) =>
          genres[genreId].some((genre) => genre.movieId === movieId)
        )
        .reduce((acc, key) => {
          acc[key] = movies[key];
          return acc;
        }, {});

      setFilteredMovies(filtered);
    }
  }, [movies]);

  return (
    <Box p={5}>
      <MovieGrid
        movies={filteredMovies}
        error={error}
        isLoading={isLoading}
      />
    </Box>
  );
};
export default GenreMovies;
