import { Box, Flex, Text, Em } from "@chakra-ui/react";
import Image from "next/image";
import maleToyFace from "@/assets/images/toy-face-male.png";

function TestimonialCard() {
  return (
    <Box pt={[0, null, null, "110px"]}>
      <Box
        pos="relative"
        w={["100%", null, null, "450px"]}
        aspectRatio={["none", null, null, 1.2]}
        minH={["350px", null, null, "none"]}
        bg="#282828"
        p={[8, null, null, 16]}
      >
        <Flex
          justify="center"
          align="center"
          w={["80px", null, null, "220px"]}
          aspectRatio={1}
          bg="#535353"
          pos="absolute"
          top={["30px", null, null, "-110px"]}
          left={["30px", null, null, "-110px"]}
          borderRadius="25px"
          boxShadow="10px 10px 10px rgba(41, 39, 39, 0.81)"
        >
          <Box w={["50%"]} aspectRatio={0.7} pos="relative">
            <Image src={maleToyFace} alt="" fill />
          </Box>
        </Flex>
        <Text textAlign="right" fontSize={["6xl", null, null, "8xl"]}>
          <Em>&quot;</Em>
        </Text>
        <Text mb={5}>
          Lorem ipsum dolor sit amet consectetur. Iaculis scelerisque diam quam
          id. Quam libero mattis gravida proin pharetra in.
        </Text>
        <Text textAlign="right" fontSize="xs">
          James Oduocha
        </Text>
      </Box>
    </Box>
  );
}

export default TestimonialCard;
