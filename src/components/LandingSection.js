import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Shwetha";
const bio1 = "A MERN Stack developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="2xl" name="Pete" />
      <Heading as="h1">{greeting}</Heading>
      <Heading as="h2" size="md">{bio1}</Heading>
      <Heading as="h2" size="md">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
