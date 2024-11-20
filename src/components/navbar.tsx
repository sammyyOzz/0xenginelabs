"use client"

import { Flex, HStack, Text } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  return (
    <Flex justify="space-between" py={7}>
      <HStack>
        {/* logo here */}
        <Text textTransform="uppercase" fontWeight="black" fontSize="lg">
          <Text as="span" color="#02FFE4">
            ox{" "}
          </Text>
          engine labs
        </Text>
      </HStack>

      <HStack>
        <Button color="#02FFE4" variant="outline" onClick={() => router.push("/")}>
          Home
        </Button>
        <Button color="#ffffff" variant="outline" onClick={() => router.push("/our-services")}>
          Our services
        </Button>
        <Button bg="#02FFE4" variant="solid" onClick={() => router.push("/contact-us")}>
          Contact us
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
