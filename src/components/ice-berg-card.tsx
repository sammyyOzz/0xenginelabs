import { Box, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface IceBergCardProps {
  imageUrl: StaticImageData;
  title: string;
  subtitle: string;
}

function IceBergCard({ imageUrl, title, subtitle }: IceBergCardProps) {
  return (
    <Box
      pos="relative"
      w="calc(25% - 60px)"
      aspectRatio={1 / 2.3}
      transition="1s linear all"
      _hover={{
        "& > img": {
          filter: "grayscale(100%)",
          transition: "1s linear all",
        },
        "& > div": {
          bgImage: "linear-gradient(rgba(0, 0, 0, 0), #000000)",
          transition: "1s linear all",
        },
        "& > .title": {
          bottom: "200px",
          transition: "200ms linear all",
        },
        "& > .subtitle": {
          opacity: 1,
          transition: "200ms linear all",
        },
      }}
      cursor="pointer"
    >
      <Image src={imageUrl} fill alt="" />
      <Box
        pos="absolute"
        top={0}
        left={0}
        h="100%"
        w="100%"
        transition="1s linear all"
        bgImage="linear-gradient(rgba(0, 0, 0, 0), rgba(123, 255, 242, 0.3), rgba(0, 0, 0, 0.83))"
      />
      <Text
        className="title"
        color="#ffffff"
        pos="absolute"
        bottom="20px"
        px="20px"
        lineClamp={1}
        fontWeight="bold"
        fontSize="lg"
        textTransform="capitalize"
        transition="200ms linear all"
      >
        {title}
      </Text>
      <Text
        className="subtitle"
        color="#ffffff"
        pos="absolute"
        bottom="90px"
        px="20px"
        lineClamp={4}
        fontWeight="bold"
        fontSize="lg"
        opacity={0}
        transition="200ms linear all"
      >
        {subtitle}
      </Text>
    </Box>
  );
}

export default IceBergCard;
