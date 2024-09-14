import useMovies from "../../hooks/useMovies";
import { Box } from "@chakra-ui/react";
import MovieGrid from "./MovieGrid";

const TopMovies = () => {
  const { movies, error, isLoading } = useMovies({});
  const sortedMovies = Object.keys(movies)
    .sort((a, b) => movies[b].score - movies[a].score)
    .slice(0, 10)
    .reduce((acc, key) => {
      acc[key] = movies[key];
      return acc;
    }, {});
  return (
    <Box p={5}>
      <MovieGrid
        movies={sortedMovies}
        error={error}
        isLoading={isLoading}
      />
    </Box>
  );
};
export default TopMovies;
