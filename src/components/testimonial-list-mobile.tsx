import { Flex } from "@chakra-ui/react"
import TestimonialCard from "./testimonial-card"

function TestimonialListMobile() {
  return (
    <Flex direction="column" gap={5}>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </Flex>
  )
}

export default TestimonialListMobile