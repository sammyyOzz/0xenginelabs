"use client";

import { Box, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface IceBergCardProps {
  imageUrl: StaticImageData;
  title: string;
  subtitle: string;
  id: string;
}

function IceBergCard({ imageUrl, title, subtitle, id }: IceBergCardProps) {
  const router = useRouter();

  return (
    <>
      <Box
        borderRadius={["15px", null, null, 0]}
        overflow="hidden"
        pos="relative"
        w={["100%", null, null, "calc(25% - 60px)"]}
        aspectRatio={[1, null, null, 1 / 2.3]}
        transition="1s linear all"
        _hover={{
          "& > img": {
            filter: ["none", null, null, "grayscale(100%)"],
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
        onClick={() => router.push(`/our-services#${id}`)}
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
          display={["none", null, null, "block"]}
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
          display={["none", null, null, "block"]}
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
          display={["none", null, null, null, null, "block"]}
        >
          {subtitle}
        </Text>
      </Box>

      <Box display={["block", null, null, "none"]} mb={10}>
        <Text
          color="#000000"
          fontWeight="bold"
          fontSize="xl"
          textTransform="capitalize"
          mb={3}
        >
          {title}
        </Text>
        <Text color="#000000" fontSize="sm" mb={3}>
          {subtitle}
        </Text>
        <Button
          bg="#02FFE4"
          border="none"
          variant="solid"
          onClick={() => router.push(`/our-services#${id}`)}
        >
          Read more
        </Button>
      </Box>
    </>
  );
}

export default IceBergCard;
