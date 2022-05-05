import { Flex, IconButton, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMobile } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex p={10} align="center" justify={"space-between"}>
      <Link href="https://github.com/DanLawrence91" isExternal>
        <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
      </Link>
      <Link href="https://www.linkedin.com/in/daniel-lawrence-79137117a/" isExternal>
        <IconButton ml={2} icon={<FaLinkedin />} isRound="true"></IconButton>
      </Link>
      <Link href="https://twitter.com/DanLawrence1991" isExternal>
        <IconButton ml={2} icon={<FaTwitter />} isRound="true"></IconButton>
      </Link>
      <Text>
        <Icon as={FaMobile}></Icon> Mobile - +61 (0) 450482186
      </Text>
      <Link href="mailto:dan.lawrence0810@gmail.com" isExternal>
        dan.lawrence0810@gmail.com
      </Link>
      {/* Need to add email and mobile */}
    </Flex>
  );
}
