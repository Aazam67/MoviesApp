import { FetchMovies } from "../../hooks/useMovies";
import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
//import useGenre from "../hooks/useGenre";

interface Props {
  movies: FetchMovies;
  error: string;
  isLoading: boolean;
}

const MovieGrid = ({ movies, error, isLoading }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 6 }}
        padding="10px"
        spacing={10}>
        {error && <Text color="red.500">{error}</Text>}
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieCardContainer key={skeleton}>
              <MovieCardSkeleton key={skeleton} />
            </MovieCardContainer>
          ))}
        {Object.keys(movies).map((movieId) => (
          <MovieCardContainer key={movieId}>
            <MovieCard
              key={movieId}
              id={movieId}
              movie={movies[movieId]}
            />
          </MovieCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default MovieGrid;
