import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Flex, IconButton, Text } from "@chakra-ui/react";
import HamburgerMenuIcon from "./icons/hamburger-menu";
import Socials from "./socials";
import Logo from "./logo";
import Link from "next/link";

function Sidebar() {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton variant="outline">
          <HamburgerMenuIcon />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent p={7}>
        <DrawerHeader>
          <DrawerTitle>
            <Logo />
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Flex direction="column" align="flex-end" gap={10} pt={40}>
            <Link href="/">
              <Text as="span" fontSize="lg" fontWeight="bold">Home</Text>
            </Link>
            <Link href="/our-services">
              <Text as="span" fontSize="lg" fontWeight="bold">Our services</Text>
            </Link>
            <Link href="/contact-us">
              <Text as="span" fontSize="lg" fontWeight="bold">Contact us</Text>
            </Link>
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Socials />
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  )
}

export default Sidebar;
