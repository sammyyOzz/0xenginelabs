import React from "react";
import Container from "../ui/container";
import { Box, Text } from "@chakra-ui/react";
import TestimonialsSlider from "../testimonials-slider";
import TestimonialListMobile from "../testimonial-list-mobile";

function TestimonialSection() {
  return (
    <Box as="section" bg="#ffffff" pb={40}>
      <Container>
        <Box pt={20} pb={40}>
          <Text color="gray" textTransform="uppercase" fontSize="lg">
            want to know
          </Text>
          <Text color="#000000" fontSize="6xl" fontWeight="black" mb={8} w={["100%", null, null, "40%"]}>
            What people say about us?
          </Text>
        </Box>
        <Box display={["none", null, null, "block"]}>
          <TestimonialsSlider />
        </Box>
        <Box display={["block", null, null, "none"]}>
          <TestimonialListMobile />
        </Box>
      </Container>
    </Box>
  );
}

export default TestimonialSection;
