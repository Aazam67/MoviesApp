import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  NumberInput,
  NumberInputField,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SubmitReviews = () => {
  const { movieId } = useParams();
  const [formData, setFormData] = useState({
    movieId: movieId,
    reviewer: "",
    title: "",
    review: "",
    score: "",
  });

  const toast = useToast();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNumberChange = (value: any) => {
    setFormData({
      ...formData,
      score: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://city-assignment.firebaseio.com/reviews.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast({
          title: "Review submitted.",
          description: "Your review has been successfully submitted.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormData({
          movieId: "",
          reviewer: "",
          title: "",
          review: "",
          score: "",
        });
      } else {
        throw new Error("Failed to submit review");
      }
    } catch (err) {
      toast({
        title: "Error",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box mt={10} p={5} borderWidth={1} borderRadius="lg">
      <Heading as="h1" size="lg" textAlign="center" mb={6}>
        Submit Review
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="hidden"
          name="movieId"
          value={formData.movieId}
          onChange={handleChange}
          placeholder="Enter movie ID"
        />
        <HStack spacing={4} mb={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="reviewer"
              value={formData.reviewer}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter review title"
            />
          </FormControl>

          <FormControl isRequired mb={4}>
            <FormLabel>Score</FormLabel>
            <NumberInput
              name="score"
              value={formData.score}
              min={0}
              max={10}
              step={0.1}
              precision={1}
              onChange={handleNumberChange}
            >
              <NumberInputField placeholder="Enter between 1-10" />
            </NumberInput>
          </FormControl>
        </HStack>

        <FormControl isRequired mb={4}>
          <FormLabel>Review</FormLabel>
          <Textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Enter your review"
          />
        </FormControl>

        <Button colorScheme="teal" type="submit" width="full">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SubmitReviews;
