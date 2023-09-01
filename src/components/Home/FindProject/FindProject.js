import React, { useState } from "react";
import { BiChevronUpCircle, BiChevronDownCircle } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";

import {
  category,
  coin,
  collection,
  filtering,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../../../images/images";
import Card from "./Card/Card";
import styles from "./FindProject.module.css";
import { ethers } from "ethers";
import { useSigner } from "wagmi";

const FindProject = () => {
  // filterringState
  const [sortBy, setSortBy] = useState("All");
  const allSortByItems = ["ALL", "Live", "Upcoming", "Successful", "Failed"];
  const [dropDown, setDropDown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // end of filterringState
  const { data: signer } = useSigner();
  let [totalRaised, setTotalRaised] = React.useState(0);
  let hash_provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org"
  );


  let idoAbi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "purchaser",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "TokensPurchased",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_user",
          type: "address",
        },
      ],
      name: "calculateUserTokens",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_user",
          type: "address",
        },
      ],
      name: "checkWhitelist",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "contribute",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "endTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getTotalRaised",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "hardcap",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_rate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_publicCap",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_whitelistCap",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_minimimumPurchase",
          type: "uint256",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "isWhitelistRound",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "minimimumPurchase",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "publicCap",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "saleToken",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_hardcap",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_softcap",
          type: "uint256",
        },
      ],
      name: "setHardcap",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_min",
          type: "uint256",
        },
      ],
      name: "setMinimumPurchase",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_start",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_end",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_wlEnd",
          type: "uint256",
        },
      ],
      name: "setTimes",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "softcap",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "startTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "token",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSold",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "userContributions",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "userPurchase",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_user",
          type: "address",
        },
      ],
      name: "userTotalContributions",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "whitelistCap",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "whitelistContract",
      outputs: [
        {
          internalType: "contract whitelist",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "whitelistEndTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "withdrawETH",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdrawSaleToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  let idoAddress = "0x4e6E52094B4b022dbCAa49e02074b387Ab2a1683";

  const getTotalRaised = async () => {
    let ido = new ethers.Contract(idoAddress, idoAbi, hash_provider);
    try {
      let totalRaised = await ido.getTotalRaised();
      setTotalRaised(ethers.utils.formatEther(totalRaised));
    } catch (e) { }
  };
  getTotalRaised();
  let percentage = ((totalRaised / 90000) * 100).toFixed(0);

  const projects = [
    {
      status: "Successful",
      statusbg: "#18ED86",
      feature: ["kyc", "audit"],
      image:
        "https://pbs.twimg.com/profile_images/1624393158456143874/tdEGrujS_400x400.jpg",
      name: "Hepton L3",
      tagline: "Fair Launch",
      info: "Hepton is a Layer-3 infrastructure project that offers a hyper-scale solution for the Ethereum network.",
      currency: "USDT",
      softcap: "50K",
      hardcap: "90k",
      liquidity: 93.75,
      wlSpot: 800,
      progress: 98,
      startPrice: 0,
      endPrice: 90000,
      color: "rgb(206, 232, 255, 0.7)",
      background: "#46A6FF",
      totalRaised: 88058,
      ca: "/"
    },
    {
      status: "Upcoming",
      statusbg: "#FCD435",
      feature: ["kyc", "audit"],
      image:
        "https://i.ibb.co/nbwJytr/meta.jpg",
      name: "Metapotamains",
      tagline: "Fair Launch",
      info: "The Metapotamians project provides digital services and a special universe for users to explore, complete with virtual offices and stores of affiliated companies for shopping.",
      currency: "USDT",
      softcap: "50K",
      hardcap: "100k",
      liquidity: 60,
      wlSpot: 1000,
      progress: 0,
      startPrice: 0,
      endPrice: 100000,
      color: "#CEE8FF",
      background: "#FDE2F3",
      totalRaised: 0,
      ca: "/ido/0x4e6E52094B4b022dbCAa49e02074b387Ab2a1683"
    },
    {
      status: "upcoming",
      statusbg: "#F3BA2E",
      feature: [],
      image:
        "https://pbs.twimg.com/profile_images/1624393158456143874/tdEGrujS_400x400.jpg",
      name: "Metapotamians",
      tagline: "Fair Launch",
      info: "Hepton is a Layer-3 infrastructure project that offers a hyper-scale solution for the Ethereum network.",
      currency: "",
      softcap: "TBA",
      hardcap: "TBA",
      liquidity: 93.75,
      wlSpot: "TBA",
      progress: 0,
      startPrice: 0,
      endPrice: "TBA",
      color: "#CEE8FF",
      background: "#46A6FF",
      totalRaised: 0,
      ca: "ido/hepton"
    }
  ];
  // filter function
  const filteredItems =
    sortBy.toLocaleLowerCase() === "all"
      ? projects.filter((project, _) =>
        project.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      : projects
        .filter(
          (el, _) =>
            el.status.toLocaleLowerCase() === sortBy.toLocaleLowerCase()
        )
        .filter((project, _) =>
          project.name.toLowerCase().includes(searchValue.toLowerCase())
        );
  return (
    <div className={styles.projectsContainer}>
      <div className="container">
        {" "}
        <div className={styles.header}>
          <p className={styles.heading}>Find the project you want</p>
          <div className={styles.searchAndFilter}>
            <div className={styles.inputContainer}>
              <RiSearchLine className={styles.searchIcon} />
              <input
                type="text"
                className={styles.input}
                name="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search projects"
              />
            </div>
            <div className={styles.filter}>
              <div
                className={styles.dropdown}
                style={{
                  background: dropDown && "#242b33",
                  borderRadius: dropDown && "20px",
                }}
              >
                <p className={styles.sortValue}>
                  {" "}
                  <span className={styles.sort}>Sort by: </span>{" "}
                  <span className={styles.sortBy}>{sortBy}</span>
                </p>
                {dropDown ? (
                  <BiChevronUpCircle
                    className={styles.arrow}
                    onClick={() => setDropDown((prev) => !prev)}
                  />
                ) : (
                  <BiChevronDownCircle
                    className={styles.arrow}
                    onClick={() => setDropDown((prev) => !prev)}
                  />
                )}
                {dropDown && (
                  <div className={styles.dropDownItems}>
                    {allSortByItems.map((el, i) => (
                      <p
                        key={i}
                        className={styles.dropDownItem}
                        onClick={() => {
                          setDropDown(false);
                          setSortBy(el);
                        }}
                      >
                        {el}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projects}>
          {filteredItems.map((el, i) => (
            <Card {...el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindProject;
