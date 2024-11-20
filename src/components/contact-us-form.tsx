"use client";

import { Box, Input, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { createContact } from "@/server-actions/contact";

function ContactUsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({});
    const formData = new FormData(e.currentTarget);

    const result = await createContact(formData);

    if (result?.errors) {
      setErrors(result.errors)
    }
  }


  return (
    <Box pb={10} css={{ "& input": { bg: "#ffffff", color: "#000000", px: 3, h: "55px", borderRadius: 0, fontSize: "lg" }}}>
      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={[1, null, null, 2]} gap={8}>
          <Box>
            <Text mb={5}>First name</Text>
            <Input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            {errors?.firstName && (
            <Text fontSize="sm" color="red.500">{errors.firstName[0]}</Text>
          )}
          </Box>
          <Box>
            <Text mb={5}>Last name</Text>
            <Input name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            {errors?.lastName && (
              <Text fontSize="sm" color="red.500">{errors.lastName[0]}</Text>
            )}
          </Box>
        </SimpleGrid>

        <Text mt={8} mb={5}>Email</Text>
        <Input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors?.email && (
          <Text fontSize="sm" color="red.500">{errors.email[0]}</Text>
        )}

        <Text mt={8} mb={5}>Your message</Text>
        <Textarea bg="#ffffff" color="#000000" p={3} resize="none" h="200px" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        {errors?.message && (
          <Text fontSize="sm" color="red.500">{errors.message[0]}</Text>
        )}

        <Button w="100%" variant="outline" h="60px" mt={8} type="submit">Submit</Button>
      </form>
    </Box>
  )
}

export default ContactUsForm