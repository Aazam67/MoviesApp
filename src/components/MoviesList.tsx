import {
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Stack,
  Box,
} from "@chakra-ui/react";
import MovieGrid from "./MovieGrid";
import { Select } from "@chakra-ui/react";
import GenreList from "./GenreList";
import useGenre from "../hooks/useGenre";
import useMovies from "../hooks/useMovies";

const MoviesList = () => {
  const { genres } = useGenre({});
  const { movies, error, isLoading } = useMovies({});
  return (
    <Stack divider={<StackDivider />} spacing="4">
      {Object.keys(genres).map((genre, index) => (
        <Box key={index} p={5}>
          <Card>
            <CardHeader as="h1" fontSize={40} mb={2}>
              <Select placeholder="Genre">
                <option value={genre}>{genre}</option>
              </Select>
            </CardHeader>
            <CardBody>
              <MovieGrid movies={movies} error={error} isLoading={isLoading} />
            </CardBody>
          </Card>
        </Box>
      ))}
    </Stack>
  );
};
export default MoviesList;
