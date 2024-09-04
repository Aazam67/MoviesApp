import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";

const Movies = () => {
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
            <Text pt="2" fontSize="sm">
              View a summary of all your clients over the last month.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
export default Movies;
