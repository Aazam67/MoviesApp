import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Stack,
  Box,
} from "@chakra-ui/react";
import MovieGrid from "./MovieGrid";

const MoviesList = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Genre</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Genre
            </Heading>
            <MovieGrid />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
export default MoviesList;
