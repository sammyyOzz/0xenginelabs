import { Flex, HStack, Text } from "@chakra-ui/react";
import { Button } from "./ui/button";

function Navbar() {
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
        <Button color="#02FFE4" variant="outline">
          Home
        </Button>
        <Button color="#ffffff" variant="outline">
          Our services
        </Button>
        <Button bg="#02FFE4" variant="solid">
          Contact us
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
