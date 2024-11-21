import ContactUsForm from "@/components/contact-us-form";
import Footer from "@/components/footer";
import Container from "@/components/ui/container";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

function ContactUs() {
  return (
    <Box bg="#000000" minH="100vh">
      <Container>
        <SimpleGrid columns={[1, null, null, 2]} gap={10}>
          <Box>
            <Text color="gray" textTransform="uppercase" fontSize="lg">
              we would like to hear from you
            </Text>
            <Text fontSize="6xl" fontWeight="black" mb={8}>
              Contact us
            </Text>
            <ContactUsForm />
          </Box>
          <Box bg="#ffffff"></Box>
        </SimpleGrid>
        <Footer />
      </Container>
    </Box>
  );
}

export default ContactUs;
