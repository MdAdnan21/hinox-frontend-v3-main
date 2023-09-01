import React from "react";
import AllProject from "../components/VestingDashboard/AllProjects/AllProject";
import HeroSection from "../components/VestingDashboard/HeroSection/HeroSection";
import ProjectInfoAndCounter from "../components/VestingDashboard/ProjectInfoAndCounter/ProjectInfoAndCounter";
import Register from "../components/Minter/Register/Register";
import Token from "../components/Minter/Token/Token";
// import InvalidWallet from "../components/VestingDashboard/AllProjects/InvalidWal/InvalidWallet";

const VestingDashboard = () => {
  return (
    <>
      <HeroSection />
      <ProjectInfoAndCounter />
      <AllProject />
 
      <Register />
      <Token />
    </>
  );
};

export default VestingDashboard;
