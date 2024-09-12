import {
  Card,
  CardBody,
  Box,
  SimpleGrid,
  Link,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import { Link as RouterLink } from "react-router-dom";

const GenresList = () => {
  const { genres, error, isLoading } = useGenre({});
  const skeletons = [1, 2, 3, 4];
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
      {error && <Text color="red.500">{error}</Text>}
      {isLoading &&
        skeletons.map((skeleton) => (
          <Box borderRadius={10} p={5} overflow="hidden" key={skeleton}>
            <Card>
              <CardBody>
                <SkeletonText />
              </CardBody>
            </Card>
          </Box>
        ))}
      {Object.keys(genres).map((genre, index) => (
        <Box key={index} p={5}>
          <Card>
            <CardBody>
              <Link as={RouterLink} to={`/genre/${genre}`}>
                {genre}
              </Link>
            </CardBody>
          </Card>
        </Box>
      ))}
    </SimpleGrid>
  );
};
export default GenresList;
