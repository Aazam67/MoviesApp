import {
  Box,
  Image,
  Text,
  Badge,
  Flex,
  Stack,
  Heading,
  Link,
  SkeletonText,
  Skeleton,
  SkeletonTextProps,
} from "@chakra-ui/react";
import useMovies from "../../hooks/useMovies";
import { useParams } from "react-router-dom";

import { Link as RouterLink } from "react-router-dom";
import SubmitReviews from "./SubmitReviews";
import MovieReview from "./MovieReviews";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { movies, error, isLoading } = useMovies({ movieId });
  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      {isLoading && (
        <Box
          maxW="100%" // Full width
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          p={5}
          my={4}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Skeleton
              width={"200px"}
              height={"300px"}
              mr={5}
            />

            <Box flex="1">
              <SkeletonText />
            </Box>
          </Flex>
        </Box>
      )}
      {Object.keys(movies).map((movieId, index) => {
        let movie = movies[movieId];
        return (
          <Box
            key={index}
            maxW="100%" // Full width
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            p={5}
            my={4} // Margin for vertical spacing
          >
            {/* Flex container to place image on the left and details on the right */}
            <Flex direction={{ base: "column", md: "row" }}>
              {/* Movie Image on the left side */}
              <Image
                src={movie.imageUrl}
                alt={movie.title}
                borderRadius="md"
                objectFit="cover"
                maxW={{ base: "100%", md: "300px" }} // Adjust width on larger screens
                mr={5} // Right margin for spacing
              />

              {/* Movie Details on the right side */}
              <Box flex="1">
                {/* Movie Title */}
                <Heading
                  fontSize="2xl"
                  mb={2}>
                  {movie.title}
                </Heading>

                {/* Movie Release Year and Score */}
                <Flex
                  justify="space-between"
                  align="center"
                  mb={2}>
                  <Text
                    fontSize="sm"
                    color="gray.600">
                    Release Year: {movie.releaseYear}
                  </Text>
                  <Badge
                    colorScheme={movie.score >= 7 ? "green" : "red"}
                    p={1}>
                    {movie.score}/10
                  </Badge>
                </Flex>

                {/* Director Information */}
                <Text fontWeight="bold">
                  Directed by:{" "}
                  <a href={`/director/${movie.directorId}`}>{movie.director}</a>
                </Text>

                {/* Movie Genres */}
                <Flex
                  mt={2}
                  wrap="wrap">
                  {movie.genres.map((genre, index) => (
                    <Link
                      key={index}
                      as={RouterLink}
                      to={`/genre/${genre}`}>
                      {" "}
                      <Badge
                        key={index}
                        borderRadius="full"
                        px={2}
                        colorScheme="teal"
                        mr={2}
                        mt={2}>
                        {genre}
                      </Badge>
                    </Link>
                  ))}
                </Flex>

                {/* Movie Summary */}
                <Text
                  mt={4}
                  fontSize="md"
                  noOfLines={4}>
                  {movie.summary}
                </Text>

                {/* Cast Information */}
                <Stack mt={4}>
                  <Text fontWeight="bold">Cast:</Text>
                  {movie.cast.map((actor, index) => (
                    <Text
                      key={index}
                      fontSize="sm"
                      color="gray.600">
                      {actor}
                    </Text>
                  ))}
                </Stack>
              </Box>
            </Flex>
          </Box>
        );
      })}

      <MovieReview />
      <SubmitReviews />
    </>
  );
};
export default MovieDetail;
