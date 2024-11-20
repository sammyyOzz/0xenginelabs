import { Box, Flex, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface ServicesCardProps {
  imageUrl: StaticImageData;
  title: string;
  children: React.ReactNode;
}

function ServicesCard({ imageUrl, title, children }: ServicesCardProps) {
  return (
    <Flex gap={20} mb={20} direction={["column", null, null, "row"]}>
      <Box
        w={["100%", null, null, "20%"]}
        aspectRatio={[1, null, null, "none"]}
        borderRadius={["20px", null, null, "0"]}
        overflow="hidden"
        pos="relative"
      >
        <Image src={imageUrl} alt="" fill />
      </Box>

      <Box w={["100%", null, null, "80%"]}>
        <Text
          fontSize={["3xl", null, null, "5xl"]}
          fontWeight="black"
          textTransform="capitalize"
          mb={10}
        >
          {title}
        </Text>
        <Box
          color="#b1b1b1"
          fontSize="lg"
          css={{
            "& p": {
              mb: 8,
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
}

export default ServicesCard;
