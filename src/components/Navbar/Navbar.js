import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { logo, profile, sun } from "../../images/images";
import styles from "./styles.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { navItem: "Staking", to: "https://staking.hinox.io" },
    // { navItem: "Launchpad", to: "/launchpad" },
    { navItem: "Faucet", to: "https://faucet.hinox.io" },
    { navItem: "Docs", to: "https://documentation.hinox.io/" },
    { navItem: "Vesting", to: "/vesting" },
    { navItem: "Minter", to: "/minter" },
    // { navItem: "Create IDO", to: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${styles.navbar} ${isScrolled && styles.navBg}`}>
      <div className="container">
        <div className={styles.navs}>
          <NavLink to="/">
            <div className={styles.logoContainer}>
              <img src={logo} alt="#" className={styles.logo} />
              <p className={styles.logoText}>Hinox</p>
            </div>
          </NavLink>
          <div
            className={`${styles.navItemsAndButtons} ${sidebar && styles.sidebar
              }`}
          >
            <div className={`${styles.navItems} `}>
              {navItems.map((el, i) => (
                <NavLink
                  onClick={() => setSidebar((prev) => !prev)}
                  to={el.to}
                  key={i}
                  className={({ isActive }) =>
                    isActive ? styles.navItemActive : styles.navItem
                  }
                >
                  {el.navItem}
                </NavLink>
              ))}
              {sidebar && (
                <MdOutlineClose
                  className={styles.close}
                  onClick={() => setSidebar((prev) => !prev)}
                />
              )}
            </div>
            <div className={styles.buttonContainer}>
              {/* <Link to="/" className={styles.iconContainer}>
                <img src={profile} alt="#" className={styles.icon} />
              </Link>{" "}
              <Link to="/" className={styles.iconContainer}>
                <img src={sun} alt="#" className={styles.icon} />
              </Link> */}
              <ConnectButton />
            </div>
          </div>{" "}
        </div>
      </div>{" "}
      <RxHamburgerMenu
        className={styles.hamburger}
        onClick={() => setSidebar((prev) => !prev)}
      />
    </section>
  );
};

export default Navbar;
