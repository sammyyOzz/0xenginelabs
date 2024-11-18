import React from "react";
import Container from "../ui/container";
import Navbar from "../navbar";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Button } from "../ui/button";

function HeroSection() {
  return (
    <Box as="section" bg="#000000" pb={60}>
      <Container>
        <Navbar />

        <Flex gap="100px">
          <Box w="50%" pt={20}>
            <Text color="gray" textTransform="uppercase" fontSize="lg">
              we are an innovative
            </Text>
            <Text color="#ffffff" fontSize="5xl" fontWeight="black" mb={8}>
              IT Solutions Provider
            </Text>
            <Text color="gray" w="80%" fontSize="lg" mb={20}>
              We are an institution providing comprehensive IT solutions
              tailored for businesses. Our expertise spans from software
              development to network infrastructure, ensuring seamless
              integration and optimal performance. With a focus on innovation
              and reliability, we empower businesses to leverage technology
              effectively for growth and efficiency. Trust us to be your
              strategic partner in navigating the complexities of IT, delivering
              solutions that align with your unique needs and goals.
            </Text>

            <HStack gap={6} mb={20}>
              <Button bg="#02FFE4" variant="solid" py={7}>Learn more</Button>
              <Button color="#ffffff" variant="outline" py={7}>Free consultation</Button>
            </HStack>

            <HStack h="130px">
              <VStack p={7} h="100%" align="flex-start" border="1px solid gray" borderRadius="20px" minW="200px">
                <Text fontSize="4xl" color="gray" fontWeight="black">50+</Text>
                <Text fontSize="sm" color="gray">Successful consults</Text>
              </VStack>

              <HStack p={7} h="100%" border="1px solid gray" borderRadius="20px" gap={5}>
                <Text lineClamp={3} color="gray" fontSize="sm">lorem ipsum dolor sit amet consecutor. Elementum nisi orem ipsum dolor sit amet consecutor. Elementum nisi</Text>
                <Box h="100px" w="100px"></Box>
              </HStack>
            </HStack>
          </Box>

          <Box w="50%"></Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default HeroSection;
