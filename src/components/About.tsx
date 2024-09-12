import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import facebook from "../assets/facebook.webp";
import telegram from "../assets/telegram.webp";
import instagram from "../assets/instagram.webp";

const About = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bg="gray.50"
    >
      <Card width="80%" boxShadow="lg">
        <CardBody>
          <Text textAlign="center" mb={4}>
            Contact: RAD SYSTEM Office: Baharestan Street, Sari, Iran. Tel:
            (+98) 33325409
          </Text>
          <Text textAlign="center" mb={6}>
            Administration Office: Modarres Street, Arateh, Iran. Tel: (+98)
            33325609 Fax: (+98) 33325678 Information e-mail: radsystem@yahoo.com
            For any inquiries, please contact us through the following social
            media platforms:
          </Text>
          <Flex justify="center" gap={6}>
            <Image src={facebook} boxSize="100px" />
            <Image src={instagram} boxSize="100px" />
            <Image src={telegram} boxSize="100px" />
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};
export default About;
