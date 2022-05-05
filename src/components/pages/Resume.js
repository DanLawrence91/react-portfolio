import { Flex, Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import CV from "./assets/danLawrenceResume.pdf";

function Resume() {
  return (
    <Flex direction={"column"}>
      <Text>
        Download my resume{" "}
        <Link href={CV} isExternal>
          here
        </Link>
      </Text>
      <Text>Technical proficiencies include:</Text>
      <UnorderedList>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>JavaScript / TypeScript</ListItem>
        <ListItem>Bootstrap / Tailwind CSS / Chakra UI</ListItem>
        <ListItem>React</ListItem>
        <ListItem>Node.js</ListItem>
        <ListItem>REST APIs</ListItem>
        <ListItem>MySQL</ListItem>
        <ListItem>MongoDB / Mongoose</ListItem>
        <ListItem>GraphQL</ListItem>
        <ListItem>Express / Fastify</ListItem>
        <ListItem>Sequelize / Prisma</ListItem>
      </UnorderedList>
    </Flex>
  );
}

export default Resume;
