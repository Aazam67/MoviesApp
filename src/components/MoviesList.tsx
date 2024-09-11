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

const MoviesList = () => {
  const { genres } = useGenre();
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {Object.keys(genres).map((genre, index) => (
            <Box key={index} p={5}>
              <CardHeader as="h1" fontSize={40} mb={2}>
                <Select placeholder="Genre">
                  <option value={genre}>
                    <GenreList />
                  </option>
                </Select>
              </CardHeader>
              <MovieGrid />
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
export default MoviesList;
