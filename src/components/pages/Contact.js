import { Flex, Box, Heading, Button, FormControl, FormLabel, Text, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // need to sort as fills out all boxes currently
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please use a valid email");
      return;
    } else if (!name || !message || !email) {
      setError("Please fill in all required fields");
      return;
    }

    setEmail("");
    setName("");
    setMessage("");
    setError("");
  };

  return (
    <Flex width="full" align="center" justifyContent={"center"} p={5} mb={5}>
      <Box p="8" w={"50%"} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign={"center"}>
          <Heading>Contact Me</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired p={2}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" type="text" value={name} onChange={handleInputChange} placeholder="Enter name here" />
            </FormControl>
            <FormControl isRequired p={2}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" value={email} onChange={handleInputChange} placeholder="youremail@here.com" />
            </FormControl>
            <FormControl isRequired p={2}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea id="message" type="text" value={message} onChange={handleInputChange} placeholder="Please leave your message here"></Textarea>
            </FormControl>
            <Button width="full" mt={4} type="submit" onClick={handleFormSubmit} backgroundColor={"cyan.400"} variant={"outline"}>
              Contact
            </Button>
          </form>
        </Box>
        {error && <Text>{error}</Text>}
      </Box>
    </Flex>
  );
}

export default Contact;
