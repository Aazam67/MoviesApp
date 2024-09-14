import { Box, Text, Badge, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import useReview from "../../hooks/useReview";
const MovieReview = () => {
  const { movieId } = useParams();
  const { reviews } = useReview({ movieId });
  return Object.keys(reviews).map((reviewId, index) => {
    let review = reviews[reviewId];
    return (
      <Box
        key={index}
        borderWidth="1px"
        borderRadius="md"
        p={4}
        shadow="md"
        w="full"
      >
        <Heading size="md">{review.title || "Untitled"}</Heading>
        <Text mt={2}>
          <strong>Reviewer:</strong> {review.reviewer}
        </Text>
        {review.score && (
          <Badge mt={2} colorScheme="green">
            Score: {review.score}
          </Badge>
        )}
        <Text mt={2}>
          <strong>Review:</strong> {review.review}
        </Text>
      </Box>
    );
  });
};
export default MovieReview;
