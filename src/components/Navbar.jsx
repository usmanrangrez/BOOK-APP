import React from "react";
import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <HStack
      p={3}
      bgColor="blackAlpha.900"
      color="white"
      alignItems={"center"}
      justifyContent={["space-between", "space-between", "space-evenly"]}
    >
      <Heading fontSize={{ base: "2xl", md: "4xl" }}>
        <Link to="/">React Books App</Link>
      </Heading>
      <Box
        bg="transparent"
        color="white"
        _hover={{
          background: "transparent",
          color: "teal.500",
        }}
        fontSize={{ base: "1xl", md: "2xl" }}
      >
        <Link to="/favourites">Your Favourites</Link>
      </Box>
    </HStack>
  );
};

export default Navbar;
