import { Box, Stack } from "@chakra-ui/react";
import React from "react";
const Footer = () => {
  return (
    <Stack
      marginTop={"100px"}
      bgColor="blackAlpha.900"
      color="white"
      fontSize={22}
      alignItems={"center"}
      p={4}
      justifyContent="center"
    >
      <Box>Books App 2023</Box>
    </Stack>
  );
};

export default Footer;
