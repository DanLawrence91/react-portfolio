import { Flex, Box, Heading, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

function Contact() {
  // need to sort as fills out all boxes currently

  return (
    <Flex width="full" align="center" justifyContent={"center"}>
      <Box p="2">
        <Box textAlign={"center"}>
          <Heading>Contact Me</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input id="name" type="text" placeholder="Enter name here" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" placeholder="youremail@here.com" />
            </FormControl>
            <FormControl>
              {/* Need to add error messages here */}
              <FormLabel>Message</FormLabel>
              <Textarea id="name" type="text" placeholder="Please leave your message here"></Textarea>
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Contact;
