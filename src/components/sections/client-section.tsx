import React from "react";
import Container from "../ui/container";
import { Box, Flex, Text } from "@chakra-ui/react";
import SettingsIcon from "../icons/settins";
import { Button } from "../ui/button";

function ClientSection() {
  return (
    <Box as="section" bg="#ffffff" py={40}>
      <Container>
        <SettingsIcon fontSize="90px" />

        <Flex gap="100px">
          <Box w="50%" pt={20}>
            <Text color="gray" textTransform="uppercase" fontSize="lg">
              here are
            </Text>
            <Text color="#000000" fontSize="6xl" fontWeight="black" mb={8}>
              A few of our clients
            </Text>
            <Text color="gray" w="80%" fontSize="xl" mb={20}>
              Meet our delighted clients who trust us for exceptional service
              and quality. Their satisfaction and positive feedback inspire us
              to continually exceed expectations and deliver outstanding
              results. Join them today.
            </Text>

            <Button bg="#02FFE4" variant="solid" border="none" py={7}>
              Learn more
            </Button>
          </Box>

          <Box w="50%"></Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default ClientSection;
