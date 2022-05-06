import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/nav.css";

const MenuItems = (props) => {
  const { children, to } = props;
  return (
    <Text p={5}>
      <NavLink to={to}>{children}</NavLink>
    </Text>
  );
};

function Header() {
  const getClassName = () => {
    switch (window.location.pathname) {
      case "/react-portfolio":
        return "active";

      case "/portfolio":
        return "active";

      case "/contact":
        return "active";

      case "/resume":
        return "active";

      default:
        return "inactive";
    }
  };

  return (
    <Flex as="nav" direction={{ base: "column", lg: "row" }} w="100vw" align="center" justify="space-between" wrap="wrap" p={8} color="blue.700" bg="yellow.100">
      <Flex align="center">
        <Heading ml={8} size="md" fontSize="6xl" fontWeight="bold" color="blue.700">
          Daniel Lawrence
        </Heading>
      </Flex>
      <Flex align="center" direction={{ base: "column", md: "row" }}>
        <MenuItems className={getClassName()} to="/react-portfolio">
          About Me
        </MenuItems>
        <MenuItems className={getClassName()} to="/portfolio">
          Portfolio
        </MenuItems>
        <MenuItems className={getClassName()} to="/contact">
          Contact
        </MenuItems>
        <MenuItems className={getClassName()} to="/resume">
          Resume{" "}
        </MenuItems>
      </Flex>
    </Flex>
  );
}

export default Header;
