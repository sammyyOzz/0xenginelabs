import React from "react";
import Container from "../ui/container";
import { Box, Flex, Text } from "@chakra-ui/react";
import SettingsIcon from "../icons/settins";
import { Button } from "../ui/button";
import ClientsDesktop from "../clients-desktop";

function ClientSection() {
  return (
    <Box as="section" bg="#ffffff" py={40}>
      <Container>
        <SettingsIcon fontSize="90px" />

        <Flex gap="100px" direction={["column", null, null, "row"]}>
          <Box w={["100%", null, null, "50%"]} pt={20} pb={[0, null, null, 40]}>
            <Text color="gray" textTransform="uppercase" fontSize="lg">
              here are
            </Text>
            <Text color="#000000" fontSize="6xl" fontWeight="black" mb={8}>
              A few of our clients
            </Text>
            <Text color="gray" w={["100%", null, null, "80%"]} fontSize="xl" mb={20}>
              Meet our delighted clients who trust us for exceptional service
              and quality. Their satisfaction and positive feedback inspire us
              to continually exceed expectations and deliver outstanding
              results. Join them today.
            </Text>

            <Button bg="#02FFE4" variant="solid" border="none" py={7}>
              Learn more
            </Button>
          </Box>

          <Box w={["100%", null, null, "50%"]} pos="relative" border="1px solid red">
            <ClientsDesktop />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default ClientSection;
