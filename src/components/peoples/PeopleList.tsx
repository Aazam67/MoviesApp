import {
  Image,
  Heading,
  SimpleGrid,
  Card,
  Link,
  CardBody,
  Text,
  Box,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";

import usePeople from "../../hooks/usePeople";
import { useParams } from "react-router-dom";

const PeopleList = () => {
  //get role from route in url
  const { role_code } = useParams();
  //get peoples according to role_code
  let { peoples, error, isLoading } = usePeople({
    role_code,
    dependency: [role_code],
  });
  //to show the loading
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 4, xl: 6 }}
      padding="10px"
      spacing={10}>
      {/* if error show it */}
      {error && <Text color="red.500">{error}</Text>}
      {/* if isLoading show the loading */}
      {isLoading &&
        skeletons.map((skeleton) => (
          <Box
            borderRadius={10}
            p={5}
            overflow="hidden"
            key={skeleton}>
            <Skeleton height="200px" />

            <Card>
              <CardBody>
                <SkeletonText />
              </CardBody>
            </Card>
          </Box>
        ))}
      {Object.keys(peoples).map((peopleId, index) => {
        let people = peoples[peopleId];
        return (
          <Card key={index}>
            <Link href={`/people/detail/${peopleId}`}>
              <Image
                src={people.imageUrl}
                alt={people.name}
                fit="cover"
              />
              <CardBody>
                <Heading fontSize="sm"> {people.name}</Heading>
              </CardBody>
            </Link>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};
export default PeopleList;
