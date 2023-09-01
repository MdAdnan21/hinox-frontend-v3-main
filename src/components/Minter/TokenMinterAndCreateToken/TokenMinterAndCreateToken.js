import React, { useState } from "react";
import styles from "./TokenMinterAndCreateToken.module.css";
import TokenMinter from "./TokenMinter/TokenMinter";
import CreateToken from "./CreateToken/CreateToken";

const TokenMinterAndCreateToken = () => {
  const [overlay, setOverlay] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.tokenMinterAndCreateToken}>
          <TokenMinter setOverlay={setOverlay} overlay={overlay} />
          <CreateToken overlay={overlay} />
        </div>
      </div>
    </div>
  );
};

export default TokenMinterAndCreateToken;
