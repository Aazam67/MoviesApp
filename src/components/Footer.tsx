import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import appstore from "../assets/appstore.webp";
import galaxystore from "../assets/galaxystore.webp";
import googleplay from "../assets/googleplay.webp";

const Footer = () => {
  return (
    <Flex
      bg="black" // رنگ پس‌زمینه فوتر
      p={2} // پدینگ داخلی
      alignItems="center" // تراز کردن عمودی محتوا
    >
      <Box
        flex="1"
        display="flex"
        alignItems="center" // مرکز کردن عمودی محتوا
        justifyContent="center" // مرکز کردن افقی محتوا
        bg="black"
        m={1}
      >
        <Image src={logo} boxSize="100px" objectFit="contain" />
      </Box>
      <Box
        flex="1"
        display="flex"
        alignItems="center" // مرکز کردن عمودی محتوا
        justifyContent="center" // مرکز کردن افقی محتوا
        bg="black"
        m={1}
        p={2}
        h="auto" // پدینگ داخلی باکس
      >
        <Text textAlign="left" color="white" fontSize="sm" overflow="hidden">
          On this site, you can play your favorite movies and series. search of
          selected series, in-program download, multi-user account, child
          settings, live broadcast of events. Sports and a complete archive of
          the most popular movies and series are available to you users.
          <br />
          PrivacyPolicy
        </Text>
      </Box>
      <Box
        flex="1"
        display="flex"
        alignItems="center" // مرکز کردن عمودی محتوا
        justifyContent="center" // مرکز کردن افقی محتوا
        bg="black"
        m={1}
        p={2} // پدینگ داخلی باکس
      >
        <Flex
          bg="black" // رنگ پس‌زمینه فوتر
          p={1} // پدینگ داخلی
          alignItems="center" // تراز کردن عمودی محتوا
        >
          {" "}
          <Image
            flex="1"
            src={appstore}
            boxSize="60px"
            objectFit="contain"
            m={1}
          />
          <Image
            flex="1"
            src={galaxystore}
            boxSize="60px"
            objectFit="contain"
            m={1}
          />
          <Image
            flex="1"
            src={googleplay}
            boxSize="60px"
            objectFit="contain"
            m={1}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
