import useMovies from "../hooks/useMovies";
import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 6 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieCardContainer>
              <MovieCardSkeleton key={skeleton} />
            </MovieCardContainer>
          ))}
        {Object.keys(movies).map((id) => (
          <MovieCardContainer>
            <MovieCard key={id} movie={movies[id]} />{" "}
          </MovieCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default MovieGrid;
