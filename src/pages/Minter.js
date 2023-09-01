import React from "react";

import TokenMinterAndCreateToken from "../components/Minter/TokenMinterAndCreateToken/TokenMinterAndCreateToken";
import Register from "../components/Minter/Register/Register";
import Token from "../components/Minter/Token/Token";

const Minter = () => {
  return (
    <>
      <TokenMinterAndCreateToken />
      {/* <Register /> */}
      <Token />
    </>
  );
};

export default Minter;
