import React from "react";
import LaunchPad from "../components/LaunchPad/LaunchPad";


const LaunchPadPage = () => {

  return (
    <>
      <LaunchPad whitelistFunc={whitelistFunc} />
    </>
  );
};

export default LaunchPadPage;
