import React, { useState } from "react";
import styles from "./ConnectWallet.module.css";
import { wallet, copy } from "../../../images/images";
import { useAccount } from "wagmi";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';

const ConnectedWallet = () => {
  const { address } = useAccount();
  const [copied, setCopied] = useState(false);
  const { openConnectModal } = useConnectModal();

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);

    setTimeout(() => {
      setCopied(false)
    }, 1300)
  }
  return (
    <div className={styles.wrapper}>
      <div className={[styles.box, styles.addressAndName].join(" ")}>
        <div className={styles.iconAndName}>
          <div className={styles.iconContainer}>
            <img src={wallet} alt="#" className={styles.icon} />
          </div>
          <p className={styles.text}>Connected Wallet </p>
        </div>
        <div className={styles.addressContainer}>
          {copied && <p className={styles.address}>{"Copied to Clipboard"}</p>}
          {!copied && <p
            onClick={openConnectModal} s
            className={styles.address}>{address ? (String(address).slice(0, 6) + "...." + String(address).slice(-4)) : "Connect Wallet"}</p>}
          {address && <img onClick={copyAddress} src={copy} alt="#" className={styles.copyIcon} />}
        </div>
      </div>
    </div>
  );
};

export default ConnectedWallet;
