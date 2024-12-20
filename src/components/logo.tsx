import { Box, HStack, Text } from "@chakra-ui/react";

function Logo() {
  return (
    <HStack>
      <Box bg="#ffffff" w="50px" h="50px" border="1px solid black" />
      <Text textTransform="uppercase" fontWeight="black" fontSize={["md", null, null, "xl"]}>
        <Text as="span" color="#02FFE4">
          ox{" "}
        </Text>
        engine labs
      </Text>
    </HStack>
  );
}

export default Logo;
