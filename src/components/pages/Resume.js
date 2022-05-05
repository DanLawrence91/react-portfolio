import { Flex, Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import CV from "./assets/danLawrenceResume.pdf";

function Resume() {
  return (
    <Flex direction={"column"} p={10} ml={5}>
      <Text>
        Download my resume{" "}
        <Link href={CV} isExternal color={"blue"} fontWeight={"bold"} textDecoration={"underline"}>
          here
        </Link>
      </Text>
      <Text mt={5}>Technical proficiencies include:</Text>
      <Flex direction={"row"} justifyContent={"space-evenly"}>
        <UnorderedList ml={10} mt={3} p={15}>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>Bootstrap / Tailwind CSS</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Chakra UI</ListItem>
        </UnorderedList>
        <UnorderedList p={15}>
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
