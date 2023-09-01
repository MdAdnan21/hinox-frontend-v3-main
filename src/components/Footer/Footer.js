import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsDiscord, BsTelegram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

import { category, logo } from "../../images/images";
import styles from "./styles.module.css";

const Footer = () => {
  const socialMedias = [
    { icon: <BsTelegram className={styles.socialIcon} />, to: "https://t.me/hinox_io" },
    { icon: <BsTwitter className={styles.socialIcon} />, to: "https://twitter.com/hinox_io" },
    { icon: <BsDiscord className={styles.socialIcon} />, to: "https://discord.gg/B5a8PGmy" },
  ];
  const footerItems = [
    {
      heading: "Company",
      items: [
        { name: "LinkedIn", to: "https://www.linkedin.com/company/hinoxprotocols/" },

      ],
    },
    {
      heading: "Products",
      items: [
        { name: "Launchpad", to: "https://hinox.io" },
        { name: "Lock Dapp (coming soon)", to: "#" },
        { name: "Faucet", to: "https://faucet.hinox.io" },
      ],
    },
    {
      heading: "Developers",
      items: [
        // { name: "Github", to: "#" },
        { name: "Docs", to: "https://documentation.hinox.io" },
      ],
    },
    {
      heading: "Resources",
      items: [
        { name: "Media Kit (coming soon)", to: "#" },

      ],
    },
  ];

  return (
    <>
      <section className={styles.footerContainer}>
        <div className="container">
          <div className={styles.footer}>
            <div className={styles.logoAndSocials}>
              <div className={styles.logoContainer}>
                <img src={logo} alt="#" className={styles.logo} />
                <p className={styles.logoText}>Hinox</p>
              </div>
              {/* <div className={styles.languageContainer}>
                <span className={styles.language}>English</span>
                <img src={category} alt="#" className={styles.icon} />
              </div> */}
              <div className={styles.socialContainer}>
                <div className={styles.socials}>
                  {socialMedias.map((el, i) => (
                    <a
                      href={el.to}
                      key={i}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.social}
                    >
                      {el.icon}
                    </a>
                  ))}
                </div>
              </div>
              {/* <p className={styles.copyRight}>Copyright 2023 © Hinox</p> */}
            </div>
            <div className={styles.footerItems}>
              {footerItems.map((el, i) => (
                <div className={styles.footerItem} key={i}>
                  <h5 className={styles.heading}>{el.heading}</h5>
                  {el.items.map((el, i) => (
                    <a
                      href={el.to}
                      key={i}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.text}
                    >
                      {el.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
