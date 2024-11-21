import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../ui/container";
import IceBergCard from "../ice-berg-card";
import softwareImage from "@/assets/images/software-dev.jpeg";
import digitalImage from "@/assets/images/digital-transformation.jpeg";
import businessImage from "@/assets/images/business-process.jpeg";
import solutionsImage from "@/assets/images/software-solutions.jpeg";
import {
  businessProcessAutomatonId,
  customSoftwareDevelopmentId,
  customSofwareSolutionsId,
  digitalTransformationConsultingId,
} from "@/constants";

function IceBergSection() {
  return (
    <Box as="section" bg="#ffffff" py={40}>
      <Container>
        <Text color="gray" textTransform="uppercase" fontSize="lg">
          this is just a
        </Text>
        <Text color="#000000" fontSize="6xl" fontWeight="black" mb={8}>
          Tip of the ice berg
        </Text>
      </Container>
      <Container maxW="1920px">
        <Flex gap={[5, null, null, 2]} direction={["column", null, null, "row"]}>
          <IceBergCard
            id={customSoftwareDevelopmentId}
            imageUrl={softwareImage}
            title="Custom Software Development"
            subtitle={
              "Tailored software to meet unique business needs, ensuring optimized performance and seamless integration"
            }
          />
          <IceBergCard
            id={digitalTransformationConsultingId}
            imageUrl={digitalImage}
            title={"Digital Transformation Consulting"}
            subtitle={
              "Strategic guidance for integrating modern technologies to enhance business processes and drive innovation"
            }
          />
          <IceBergCard
            id={customSofwareSolutionsId}
            imageUrl={solutionsImage}
            title={"custom software solutions"}
            subtitle={
              "Bespoke software designed to fulfill specific business requirements, enhancing efficiency and functionality."
            }
          />
          <IceBergCard
            id={businessProcessAutomatonId}
            imageUrl={businessImage}
            title={"business process automation"}
            subtitle={
              "Streamlining operations through automated workflows to improve efficiency and reduce manual tasks."
            }
          />
          <Box bg="red" flex={1} borderRadius="0 30px 30px 0" display={["none", null, null, "block"]}></Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default IceBergSection;
