import React from "react";
import { HomeContainer, HomeHeader, HomeIntro } from "./HomeElements";

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>
        Interview Project: Building a ReactJS Application with API Integration
      </HomeHeader>
      <HomeIntro>
        This is a simple ReactJS application that connects to a RESTful API to
        display data from an external service.
      </HomeIntro>
    </HomeContainer>
  );
};

export default Home;
