import { Box, Image, Text, VStack, HStack, Heading } from "@chakra-ui/react";
import usePeople from "../hooks/usePeople";
import { useParams } from "react-router-dom";

const PeopleDetail = () => {
  const { peopleId } = useParams();
  const { peoples } = usePeople({ peopleId });
  return (
    <>
      {Object.keys(peoples).map((peopleId) => {
        let people = peoples[peopleId];
        return (
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            boxShadow="md"
            bg="gray.700"
            _hover={{ boxShadow: "lg" }}
          >
            <HStack align="start" spacing={6}>
              <Image
                borderRadius="md"
                boxSize="200px"
                src={people.imageUrl}
                alt={people.name}
                objectFit="cover"
              />
              <VStack align="start" spacing={4} width="100%">
                <Heading as="h3" size="md">
                  {people.name}
                </Heading>
                <Box overflowY="auto" width="100%">
                  <Text color="gray.400">{people.bio}</Text>
                </Box>
              </VStack>
            </HStack>
          </Box>
        );
      })}
    </>
  );
};
export default PeopleDetail;
