import {
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Stack,
  Box,
} from "@chakra-ui/react";
import MovieGrid from "./MovieGrid";

interface Props {}
const movies = [{ genre: "Action" }, { genre: "Drama" }, { genre: "Comedy" }];
const MoviesList = () => {
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {movies.map((movie, index) => (
            <Box key={index} p={5}>
              <CardHeader as="h1" fontSize={40} mb={2}>
                {movie.genre}
              </CardHeader>
              <Box>
                <MovieGrid />
              </Box>
            </Box>
          ))}
        </Stack>
        ;
      </CardBody>
    </Card>
  );
};
export default MoviesList;
