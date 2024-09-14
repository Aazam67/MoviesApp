import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Heading,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import usePeople from "../../hooks/usePeople";
import { useParams } from "react-router-dom";

const PeopleDetail = () => {
  //get peopleId from route
  const { peopleId } = useParams();
  //get the exact people data
  const { peoples, error, isLoading } = usePeople({ peopleId });
  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      {isLoading && (
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
          boxShadow="md"
          bg="gray.700"
          _hover={{ boxShadow: "lg" }}>
          <HStack
            align="start"
            spacing={6}>
            <Skeleton
              height="200px"
              width="200px"
            />
            <SkeletonText width={"100%"} />
          </HStack>
        </Box>
      )}
      {Object.keys(peoples).map((peopleId, index) => {
        let people = peoples[peopleId];
        return (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            boxShadow="md"
            bg="gray.700"
            _hover={{ boxShadow: "lg" }}>
            <HStack
              align="start"
              spacing={6}>
              <Image
                borderRadius="md"
                boxSize="200px"
                src={people.imageUrl}
                alt={people.name}
                objectFit="cover"
              />
              <VStack
                align="start"
                spacing={4}
                width="100%">
                <Heading
                  as="h3"
                  size="md">
                  {people.name}
                </Heading>
                <Box
                  overflowY="auto"
                  width="100%">
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
