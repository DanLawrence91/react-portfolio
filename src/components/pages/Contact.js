import { Flex, Box, Heading, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

function Contact() {
  // need to sort as fills out all boxes currently

  return (
    <Flex width="full" align="center" justifyContent={"center"} p={5} mb={5}>
      <Box p="8" w={"50%"} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign={"center"}>
          <Heading>Contact Me</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired p={2}>
              <FormLabel>Name</FormLabel>
              <Input id="name" type="text" placeholder="Enter name here" />
            </FormControl>
            <FormControl isRequired p={2}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" placeholder="youremail@here.com" />
            </FormControl>
            <FormControl isRequired p={2}>
              {/* Need to add error messages here */}
              <FormLabel>Message</FormLabel>
              <Textarea id="name" type="text" placeholder="Please leave your message here"></Textarea>
            </FormControl>
            <Button width="full" mt={4} type="submit" backgroundColor={"cyan.400"} variant={"outline"}>
              Contact
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Contact;
