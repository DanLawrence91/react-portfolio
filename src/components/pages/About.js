import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import profPic from "./assets/pp.jpg";

function About() {
  return (
    <Flex p={10} m={5}>
      <Image src={profPic} alt="headshot"></Image>
      <Flex direction={"column"} p={10}>
        <Text my={7}>
          I am a full-stack web developer living in Adelaide, Australia having emigrated from the UK at the end of 2021! I am currently volunteering with an educational charity as a full stack developer whilst studying web development through the
          Univeristy of Adelaide coding bootcamp.{" "}
        </Text>
        <Text my={7}>
          Outside of coding, I love sports and travelling with my partner. Having visited a lot of the northern hemisphere, I am now incredibly excited to see what the southern hemisphere has to offer. Please take a look around my portfolio and us
          ethe contact form or information to get in touch!
        </Text>
      </Flex>
    </Flex>
  );
}

export default About;
