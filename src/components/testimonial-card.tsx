import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import maleToyFace from "@/assets/images/toy-face-male.png"

function TestimonialCard() {
  return (
    <Box pt={"110px"}>
      <Box pos="relative" w="450px" aspectRatio={1.2} bg="#282828" p={16}>
        <Flex justify="center" align="center" w="220px" aspectRatio={1} bg="#535353" pos="absolute" top="-110px" left="-110px" borderRadius="25px" boxShadow="10px 10px 10px rgba(41, 39, 39, 0.81)">
          <Image src={maleToyFace} alt="" />
        </Flex>
        <Text textAlign="right" fontSize="8xl">&quot;</Text>
        <Text mb={5}>
          Lorem ipsum dolor sit amet consectetur. Iaculis scelerisque diam quam id. Quam libero mattis gravida proin pharetra in.
        </Text>
        <Text textAlign="right" fontSize="xs">James Oduocha</Text>
      </Box>
    </Box>
  )
}

export default TestimonialCard