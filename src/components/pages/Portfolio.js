import { Heading, Text, Image, Link, Button, Box, Flex } from "@chakra-ui/react";
import React from "react";
import projectOne from "./assets/Project-1.png";
import projectTwo from "./assets/Project-2.png";
import projectThree from "./assets/Project-3.png";
import projectFour from "./assets/Project-4.png";
import projectFive from "./assets/Project-5.png";
import projectSix from "./assets/Project-6.png";

const PortfolioItems = (props) => {
  const { title, desc, repo, project, image } = props;
  return (
    <Box p={5} mb={5} shadow="md" borderWidth="1px" width={{ base: "90%", md: "45%", lg: "30%" }}>
      <Heading fontSize="xl" p={3}>
        {title}
      </Heading>
      <Image src={image}></Image>
      <Text mt={2} p={5} fontWeight={"bold"}>
        {desc}
      </Text>
      {/* need 2 links */}
      <Link href={repo} isExternal p={3}>
        <Button>GitHub Repo</Button>
      </Link>
      <Link href={project} isExternal p={3}>
        <Button>Deployed Project</Button>
      </Link>
    </Box>
  );
};

function Portfolio() {
  return (
    <div>
      <Flex p={5} wrap={"wrap"} justifyContent={"space-around"} bgGradient="linear(to-b, yellow.100, blue.700)">
        <PortfolioItems
          title="Sport Travel Guider"
          desc="This project combined both front and back end skills to create a website that allows tourists to search for locations and teams from within the English Premier League and decide where they would like to visit. Users can log in and leave a review as well as read past reviews. I focused initally on the back end work creating our API, however towards the end became the lead on design as well."
          repo="https://github.com/DanLawrence91/team-project"
          project="https://protected-retreat-83410.herokuapp.com/"
          image={projectOne}
        ></PortfolioItems>
        <PortfolioItems
          title="Blog Site"
          desc="This website has a fully functional back end using REST API. Users can either read all posts or a single post, leave their own posts, comment on existing posts and delete/update their own posts. Also uses authentication to only
        allow certain actions if logged in."
          repo="https://github.com/DanLawrence91/tech-blog"
          project="https://shielded-springs-19146.herokuapp.com/"
          image={projectTwo}
        ></PortfolioItems>
        <PortfolioItems
          title="Project Tracker"
          desc="This is a website that allows the user to enter projects they are working on and keep track of them. HTML, CSS, JavaScript and JQuery were used to build this project"
          repo="https://github.com/DanLawrence91/project-tracker"
          project="https://danlawrence91.github.io/project-tracker/"
          image={projectThree}
        ></PortfolioItems>

        <PortfolioItems
          title="Plan Your Crawl"
          desc="This project used data from several API's to help tourists find local breweries to visit on their travels. I lead the design for this project and also project managed my group."
          repo="https://github.com/SEO-Web/TeamRepo"
          project="https://seo-web.github.io/TeamRepo/"
          image={projectFour}
        ></PortfolioItems>
        <PortfolioItems
          title="Weather Dashboard"
          desc="This app used data from an API to give current weather conditions, along with a 5 day forecast for a chosen city, along with storing the cities previously searched for."
          repo="https://github.com/DanLawrence91/weather-dashboard"
          project="https://danlawrence91.github.io/weather-dashboard/"
          image={projectFive}
        ></PortfolioItems>
        <PortfolioItems
          title="Coding Quiz"
          desc="This is a quiz project where users can take a timed quiz and scores are saved to local storage to display a ranked leaderboard"
          repo="https://github.com/DanLawrence91/Coding--Quiz"
          project="https://danlawrence91.github.io/Coding--Quiz/"
          image={projectSix}
        ></PortfolioItems>
      </Flex>
    </div>
  );
}

export default Portfolio;
