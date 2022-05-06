import { Flex, IconButton, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMobile } from "react-icons/fa";
import "./styles/nav.css";

function Footer() {
  return (
    <Flex w="100vw" direction={{ base: "column", md: "row" }} position="absolute" align="center" justify="space-around" wrap="wrap" p={8} color={"yellow.100"} backgroundColor={"blue.700"}>
      <Link href="https://github.com/DanLawrence91" isExternal>
        <IconButton ml={2} icon={<FaGithub />} isRound="true" color={"blue.700"}></IconButton>
      </Link>
      <Link href="https://www.linkedin.com/in/daniel-lawrence-79137117a/" isExternal>
        <IconButton ml={2} icon={<FaLinkedin />} isRound="true" color={"blue.700"}></IconButton>
      </Link>
      <Link href="https://twitter.com/DanLawrence1991" isExternal>
        <IconButton ml={2} icon={<FaTwitter />} isRound="true" color={"blue.700"}></IconButton>
      </Link>
      <Text>
        <Icon as={FaMobile}></Icon>+61 (0) 450482186
      </Text>
      <Link href="mailto:dan.lawrence0810@gmail.com" isExternal>
        dan.lawrence0810@gmail.com
      </Link>
    </Flex>
  );
}

export default Footer;
