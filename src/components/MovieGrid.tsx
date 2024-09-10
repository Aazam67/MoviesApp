import useMovies from "../hooks/useMovies";
import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { movies, error } = useMovies();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 6 }}
        padding="10px"
        spacing={10}
      >
        {Object.keys(movies).map((id) => (
          <MovieCard key={id} movie={movies[id]} />
        ))}
      </SimpleGrid>
    </>
  );
};
export default MovieGrid;
