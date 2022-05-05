import { Flex, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex>
      <Link href="https://github.com/DanLawrence91" isExternal>
        <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
      </Link>
      <Link href="https://www.linkedin.com/in/daniel-lawrence-79137117a/" isExternal>
        <IconButton ml={2} icon={<FaLinkedin />} isRound="true"></IconButton>
      </Link>
      <Link href="https://twitter.com/DanLawrence1991" isExternal>
        <IconButton ml={2} icon={<FaTwitter />} isRound="true"></IconButton>
      </Link>
      {/* Need to add email and mobile */}
    </Flex>
  );
}
