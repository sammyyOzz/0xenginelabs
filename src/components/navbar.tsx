"use client"

import { Flex, HStack } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Logo from "./logo";

function Navbar() {
  const router = useRouter();

  return (
    <Flex justify="space-between" py={7}>
      <Logo />

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
