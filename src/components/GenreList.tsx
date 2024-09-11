import { Card, CardBody, Box, SimpleGrid, Link } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import { Link as RouterLink } from "react-router-dom";

const GenresList = () => {
  const { genres } = useGenre({});
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
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
