import useGenre from "../hooks/useGenre";
import useMovies from "../hooks/useMovies";
import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const GenreMovies = () => {
  const { genreId } = useParams();
  const { genres } = useGenre({ genreId: genreId });
  const { movies, error, isLoading } = useMovies({});
  const [filteredMovies, setFilteredMovies] = useState([]);
  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    if (Object.keys(genres).length && genreId) {
      const filtered = Object.keys(movies).filter((movieId) =>
        genres[genreId].some((genre) => genre.movieId === movieId)
      );
      setFilteredMovies(filtered);
    }
  }, [movies]);

  return (
    <Box p={5}>
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 6 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieCardContainer key={skeleton}>
              <MovieCardSkeleton />
            </MovieCardContainer>
          ))}

        {filteredMovies.map((movieId) => (
          <MovieCardContainer key={movieId}>
            <MovieCard key={movieId} id={movieId} movie={movies[movieId]} />
          </MovieCardContainer>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default GenreMovies;
