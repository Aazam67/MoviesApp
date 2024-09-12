// import {
//   ChakraProvider,
//   Box,
//   IconButton,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Button,
//   useDisclosure,
//   VStack,
//   Link,
//   Text,
//   Flex,
//   HStack,
//   Image,
// } from "@chakra-ui/react";
// import logo from "../assets/logo.webp";
// import { SearchIcon } from "@chakra-ui/icons";
// import ColorModeSwitch from "./ColorModeSwitch";
// import { NavLink } from "react-router-dom";
// import ReviewForm from "./SubmitReviews";
// const { isOpen, onOpen, onClose } = useDisclosure();
// const NavBar = () => {
//   return (
//     <Box px={4}>
//       <Drawer isOpen={isOpen} onClose={onClose}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Menu</DrawerHeader>

//           <DrawerBody>
//             <VStack spacing={4} align="start" p={4}>
//               <NavLink to="/">Home</NavLink>
//               <NavLink to="/genre">Genre</NavLink>
//               <NavLink to="/people/actor">Actors</NavLink>
//               <NavLink to="/people/director">Directors</NavLink>
//               <NavLink to="/about">About</NavLink>
//             </VStack>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//       <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//         <HStack spacing={8} alignItems={"center"}>
//           <Box>
//             <Image src={logo} boxSize="100px" />
//           </Box>
//           <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/genre">Genre</NavLink>
//             <NavLink to="/people/actor">Actors</NavLink>
//             <NavLink to="/people/director">Directors</NavLink>
//             <NavLink to="/about">About</NavLink>
//           </HStack>
//         </HStack>

//         <IconButton
//           colorScheme="blue"
//           aria-label="Search database"
//           icon={<SearchIcon />}
//         />

//         <Flex alignItems={"center"}>
//           <HStack padding="5px" justifyContent="space-between">
//             <ColorModeSwitch />
//           </HStack>
//           <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
//             Sign Up
//           </Button>
//           <Button variant={"outline"} colorScheme={"teal"} size={"sm"}>
//             Log In
//           </Button>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };
// export default NavBar;
// Navbar.js
// Navbar.js
import React, { useEffect } from "react";
import logo from "../assets/logo.webp";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Collapse,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth >= 48 * 16) {
      // Adjust this value to match your breakpoint (48 * 16 = 768px, for example)
      onClose(); // Close the menu if it is open
    }
  };

  // Attach resize event listener on component mount
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        color={useColorModeValue("gray.600", "gray.200")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        align={"center"}
        justify={"space-between"}
      >
        <Flex
          flex={{ base: 1 }}
          align={"center"}
          justify={{ base: "center", md: "start" }}
        >
          {/* Logo */}
          <Link href={"#"} aria-label="Home">
            <Image src={logo} boxSize="100px" />
          </Link>

          {/* Desktop Menu */}
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <Stack direction={"row"} spacing={4}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/genre">Genre</NavLink>
              <NavLink to="/people/actor">Actors</NavLink>
              <NavLink to="/people/director">Directors</NavLink>
              <NavLink to="/topmovies">Top 10</NavLink>
              <NavLink to="/about">About</NavLink>
            </Stack>
          </Flex>
        </Flex>

        {/* Mobile Menu Toggle */}
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "end" }}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Toggle Navigation"}
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
          />
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg={useColorModeValue("gray.100", "gray.900")}
          p={4}
          display={"flex"}
          spacing={4}
          align={"center"} // Center-align items horizontally
          borderTopWidth={1}
          borderTopColor={useColorModeValue("gray.200", "gray.700")}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/genre">Genre</NavLink>
          <NavLink to="/people/actor">Actors</NavLink>
          <NavLink to="/people/director">Directors</NavLink>
          <NavLink to="/topmovies">Top 10</NavLink>
          <NavLink to="/about">About</NavLink>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
