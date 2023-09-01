import React from "react";
import styles from "./TokenMinter.module.css";
import { useAccount } from "wagmi";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
const TokenMinter = ({ setOverlay, overlay }) => {
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const list = [
    "No minting function",
    "No Owner or Admin functions",
    "Fully ERC20 compliant",
    "Fully decentralised",
  ];

  function buttonTitle() {
    if (!address) {
      return {
        title: "Connect Wallet",
        func: () => {
          openConnectModal();
          console.log("connect wallet");
          setOverlay(true);
        },
      };
    } else {
      return {
        title: "Proceed to Deploy",
        func: () => setOverlay(false),
      };
    }
  }
  let CAT = buttonTitle();
  return (
    <div className={styles.tokenMinter}>
      <div className={styles.details}>
        {" "}
        <h4 className={styles.title}>Hinox Ecosystem Token Minter</h4>
        <p className={styles.text}>
          Hinox Deployer is a software tool that allows users to create and
          deploy their own ERC-20 tokens on any EVM blockchain quickly and
          securely. ERC-20 is a standard protocol for creating tokens on EVM
          networks, and Hinox Deployer ensures that the tokens it mints are
          fully compliant with this standard, making them safe and interoperable
          with other tokens and platforms that support ERC-20. With Hinox
          Deployer, users can customize their token's name, symbol, total
          supply, and other properties, and have it ready for use in just a few
          steps. This makes it a useful tool for anyone who wants to create
          their own cryptocurrency or run an IDO.
        </p>
        <ul className={styles.listContainer}>
          {list.map((el, i) => (
            <li className={[styles.list, styles.text].join(" ")} key={i}>
              {el}
            </li>
          ))}
        </ul>
      </div>
      {overlay && (
        <button
          className={styles.button}
          onClick={() => {
            CAT.func();
          }}
        >
          {CAT.title}
        </button>
      )}
    </div>
  );
};

export default TokenMinter;
