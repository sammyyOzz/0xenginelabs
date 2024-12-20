"use client"

import { Box, Flex, HStack } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Logo from "./logo";
import Sidebar from "./sidebar";

function Navbar() {
  const router = useRouter();

  return (
    <Flex justify="space-between" py={7}>
      <Logo />

      <HStack display={["none", null, null, "flex"]}>
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

      <Box display={["block", null, null, "none"]}>
       <Sidebar />
      </Box>
    </Flex>
  );
}

export default Navbar;
