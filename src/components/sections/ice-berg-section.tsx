import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../ui/container";

function IceBergSection() {
  return (
    <Box as="section" bg="#ffffff" py={40}>
      <Container>
        <Text color="gray" textTransform="uppercase" fontSize="lg">
          this is just a
        </Text>
        <Text color="#000000" fontSize="6xl" fontWeight="black" mb={8}>
          Tip of the ice berg
        </Text>
      </Container>
    </Box>
  );
}

export default IceBergSection;
