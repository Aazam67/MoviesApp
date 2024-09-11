import {
  HStack,
  Image,
  Box,
  Flex,
  Link,
  Button,
  IconButton,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { SearchIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Image src={logo} boxSize="100px" />
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/genre">Genre</NavLink>
            <NavLink to="/people">People</NavLink>
            <NavLink to="/about">About</NavLink>
          </HStack>
        </HStack>

        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
        />

        <Flex alignItems={"center"}>
          <HStack padding="5px" justifyContent="space-between">
            <ColorModeSwitch />
          </HStack>
          <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            Sign Up
          </Button>
          <Button variant={"outline"} colorScheme={"teal"} size={"sm"}>
            Log In
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
export default NavBar;
