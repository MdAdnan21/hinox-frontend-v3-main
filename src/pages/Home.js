import React from "react";
import FindProject from "../components/Home/FindProject/FindProject";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import Token from "../components/Minter/Token/Token";
import Hero from "../components/Home/Hero/Hero";
import Stats from "../components/Home/Stats/Stats";
import StepsToParticipate from "../components/Home/StepsToParticipate/StepsToParticipate";


const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <StepsToParticipate />
      <FindProject />
      <Token />
    </div>
  );
};

export default Home;
