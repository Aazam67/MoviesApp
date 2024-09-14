import appstore from "../assets/appstore.webp";
import galaxystore from "../assets/galaxystore.webp";
import googleplay from "../assets/googleplay.webp";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        wrap="wrap">
        <Box>
          <Text fontSize="sm">
            On this site, you can play your favorite movies and series. search
            of selected series, in-program download, multi-user account, child
            settings, live broadcast of events. Sports and a complete archive of
            the most popular movies and series are available to you users.
            <br />
            PrivacyPolicy
          </Text>
        </Box>
        <Box>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center">
            <Image
              src={appstore}
              width={150}
              pl={2}
            />
            <Image
              src={galaxystore}
              width={150}
              pl={2}
            />
            <Image
              src={googleplay}
              width={150}
              pl={2}
            />
          </Flex>
        </Box>
      </Flex>
      <Box
        mt={4}
        textAlign="center">
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
