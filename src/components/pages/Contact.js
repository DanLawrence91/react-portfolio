import { Flex, Box, Heading, Button, FormControl, FormLabel, Text, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
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

  const handleBlur = (e) => {
    const { target } = e;
    const blurType = target.id;
    const blurValue = target.value;

    if (blurType === "name" && blurValue === "") {
      setError("Name is required");
      return;
    }

    if (blurType === "email" && blurValue === "") {
      setError("Email is required");
      return;
    }

    if (blurType === "message" && blurValue === "") {
      setError("Message is required");
      return;
    }

    setError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !message || !email) {
      setError("Please fill in all required fields");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please use a valid email");
      return;
    }

    setEmail("");
    setName("");
    setMessage("");
    setError("");
  };

  return (
    <Flex width="full" align="center" justifyContent={"center"} p={5} bgGradient="linear(to-b, yellow.100, blue.700)">
      <Box p="8" width={{ base: "100%", sm: "75%" }} borderWidth={1} borderRadius={8} borderColor="black" boxShadow="lg">
        <Box textAlign={"center"}>
          <Heading color={"blue.700"}>Contact Me</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired p={2}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" type="text" value={name} onChange={handleInputChange} onBlur={handleBlur} placeholder="Enter name here" _placeholder={{ color: "black" }} />
            </FormControl>
            <FormControl isRequired p={2}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" value={email} onChange={handleInputChange} onBlur={handleBlur} placeholder="youremail@here.com" _placeholder={{ color: "black" }} />
            </FormControl>
            <FormControl isRequired p={2}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea id="message" type="text" value={message} onChange={handleInputChange} onBlur={handleBlur} placeholder="Please leave your message here" _placeholder={{ color: "black" }}></Textarea>
            </FormControl>
            <Button width="full" mt={4} type="submit" onClick={handleFormSubmit}>
              Contact
            </Button>
          </form>
        </Box>
        {error && (
          <Text color={"red.300"} fontWeight={"bold"}>
            {error}
          </Text>
        )}
      </Box>
    </Flex>
  );
}

export default Contact;
