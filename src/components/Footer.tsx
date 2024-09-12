import logo from "../assets/logo.webp";
import appstore from "../assets/appstore.webp";
import galaxystore from "../assets/galaxystore.webp";
import googleplay from "../assets/googleplay.webp";
import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";

const Footer = () => {
  // You can use useBreakpointValue to handle responsiveness
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Box bg="gray.800" color="white" py={6}>
      <Container maxW="container.xl">
        <Flex
          direction={flexDirection}
          justify="space-between"
          align="center"
          wrap="wrap"
        >
          <Box mb={{ base: 4, md: 0 }}>
            <Text
              textAlign="left"
              color="white"
              fontSize="sm"
              overflow="hidden"
            >
              On this site, you can play your favorite movies and series. search
              of selected series, in-program download, multi-user account, child
              settings, live broadcast of events. Sports and a complete archive
              of the most popular movies and series are available to you users.
              <br />
              PrivacyPolicy
            </Text>
          </Box>
          <Flex direction={flexDirection} align="center">
            <Image src={appstore} width={150} p={2} />
            <Image src={galaxystore} width={150} p={2} />
            <Image src={googleplay} width={150} p={2} />
          </Flex>
        </Flex>
        <Box mt={4} textAlign="center">
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
