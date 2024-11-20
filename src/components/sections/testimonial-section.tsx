import React from "react";
import Container from "../ui/container";
import { Box, Text } from "@chakra-ui/react";
import TestimonialsSlider from "../testimonials-slider";

function TestimonialSection() {
  return (
    <Box as="section" bg="#ffffff" pb={40}>
      <Container>
        <Box pt={20} pb={40}>
          <Text color="gray" textTransform="uppercase" fontSize="lg">
            want to know
          </Text>
          <Text color="#000000" fontSize="6xl" fontWeight="black" mb={8} w={["40%"]}>
            What people say about us?
          </Text>
        </Box>
        <TestimonialsSlider />
      </Container>
    </Box>
  );
}

export default TestimonialSection;
