import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Logo from "./logo";
import Link from "next/link";
import LinkedInIcon from "./icons/linked-in";
import FacebookIcon from "./icons/facebook";
import YoutubeIcon from "./icons/youtube";
import InstagramIcon from "./icons/instagram";

function Footer() {
  return (
    <Box as="footer" mt={40} pb={20}>
      <Box as="hr" borderBlock="1px solid #b9b8b8" mb={8} />

      <Flex justify="space-between">
        <Box>
          <Box display={["none", null, null, "block"]} mb={16}>
            <Logo />
          </Box>

          <HStack fontSize="2xl" gap={6}>
            <FacebookIcon />
            <LinkedInIcon />
            <YoutubeIcon />
            <InstagramIcon />
          </HStack>
        </Box>

        <Flex display={["none", null, null, "flex"]} direction="column" align="flex-end" gap={7}>
          <Link href="/">
            <Text as="span">Home</Text>
          </Link>
          {/* <Box as="br" /> */}
          <Link href="/our-services">
            <Text as="span">Our services</Text>
          </Link>
          {/* <Box as="br" /> */}
          <Link href="/contact-us">
            <Text as="span">Contact us</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
