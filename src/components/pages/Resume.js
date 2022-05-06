import { Flex, Text, Link, UnorderedList, ListItem, Heading } from "@chakra-ui/react";
import React from "react";
import CV from "./assets/danLawrenceResume.pdf";

function Resume() {
  return (
    <Flex direction={"column"} p={7} bgGradient="linear(to-b, yellow.100, blue.700)">
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        Resume
      </Text>
      <Text fontSize={"3xl"}>
        Download my resume{" "}
        <Link href={CV} isExternal color={"blue"} fontWeight={"bold"} textDecoration={"underline"}>
          here
        </Link>
      </Text>
      <Flex mt={15} lineHeight={2.5} wrap={{ base: "wrap", lg: "nowrap" }} justifyContent={{ base: "center", lg: "flex-start" }}>
        <Heading ml={8} mt={2} fontSize={"2xl"} fontWeight={"bold"}>
          Frontend proficiencies include:
        </Heading>
        <UnorderedList ml={10} mt={3} p={15} fontWeight={"bold"}>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>Bootstrap / Tailwind CSS</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Chakra UI</ListItem>
        </UnorderedList>
        <Heading ml={8} mt={2} fontSize={"2xl"} fontWeight={"bold"}>
          Backend proficiencies include:
        </Heading>
        <UnorderedList ml={10} mt={3} p={15} fontWeight={"bold"}>
          <ListItem>Node.js</ListItem>
          <ListItem>REST APIs</ListItem>
          <ListItem>MySQL</ListItem>
          <ListItem>MongoDB / Mongoose</ListItem>
          <ListItem>GraphQL</ListItem>
          <ListItem>Express / Fastify</ListItem>
          <ListItem>Sequelize / Prisma</ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  );
}

export default Resume;
