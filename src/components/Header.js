import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MenuItems = (props) => {
  const { children, to = "/" } = props;
  return (
    <Text p={5}>
      <Link to={to}>{children}</Link>
    </Text>
  );
};

function Header() {
  return (
    <Flex as="nav" w="100vw" align="center" justify="space-between" wrap="wrap" mb={8} p={8} color="black" bg="yellow.100">
      <Flex align="center">
        <Heading ml={8} size="md" fontSize="6xl" fontWeight="bold" color="cyan.400">
          Daniel Lawrence
        </Heading>
      </Flex>
      <Flex align="center">
        <MenuItems to="/react-portfolio">About Me</MenuItems>
        <MenuItems to="/portfolio">Portfolio</MenuItems>
        <MenuItems to="/contact">Contact</MenuItems>
        <MenuItems to="/resume">Resume </MenuItems>
      </Flex>
    </Flex>
  );
}

export default Header;
