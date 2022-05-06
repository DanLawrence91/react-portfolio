import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import profPic from "./assets/pp.jpg";

function About() {
  return (
    <Flex p={10} m={0} wrap={{ base: "wrap", lg: "nowrap" }} justifyContent={{ base: "center", lg: "flex-start" }} bgGradient="linear(to-b, yellow.100, blue.700)">
      <Image src={profPic} alt="headshot" borderRadius={50} h={"75%"}></Image>
      <Flex direction={"column"} p={10}>
        <Text my={5} fontWeight="bold">
          I am a full-stack web developer living in Adelaide, Australia having emigrated from the UK at the end of 2021! I am currently volunteering with an educational charity as a full stack developer whilst studying web development through the
          Univeristy of Adelaide coding bootcamp.
        </Text>
        <Text my={5} fontWeight="bold">
          It has been a challening yet rewarding journey learning to code so far, one which has given me a better understanding on how to break problems down and solve problems piece by piece. I am aiming to apply this new way of working with my
          exisiting communication and learning skills to continue to grow in this field and build my career here.
        </Text>
        <Text my={5} fontWeight="bold">
          Outside of coding, I love sports and travelling with my partner. Having visited a lot of the northern hemisphere, I am now incredibly excited to see what the southern hemisphere has to offer. Please take a look around my portfolio and us
          ethe contact form or information to get in touch!
        </Text>
      </Flex>
    </Flex>
  );
}

export default About;
