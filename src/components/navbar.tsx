import { Box, Flex, HStack, Button, Link, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="header" bg="black" color="white" py={4} px={8}>
      <Flex align="center">
        <Box fontSize="xl" fontWeight="bold">
          <Box as="span" color="cyan.400">
            0x
          </Box>{" "}
          ENGINE LABS
        </Box>
        <Spacer />
        <HStack gap={8}>
          <Link href="#home" _hover={{ color: "cyan.400" }}>
            Home
          </Link>
          <Link href="#services" _hover={{ color: "cyan.400" }}>
            Our Services
          </Link>
          <Button
            bg="cyan.400"
            color="black"
            _hover={{ bg: "cyan.300" }}
            rounded="md"
          >
            Contact Us
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
