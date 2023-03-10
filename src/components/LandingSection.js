import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Roseph!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React JS";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        size="xl"
        mb="20px"
        url="https://photos.app.goo.gl/UEoayRrdDGPxhdp87"
      />
      <Heading mb="25px" as="h1" size="sm">
        {greeting}
      </Heading>
      <Heading as="h1">{bio1}</Heading>
      <Heading as="h1">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
