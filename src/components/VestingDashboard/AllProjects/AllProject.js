import React, { useEffect, useState } from "react";
import { BiChevronUpCircle, BiChevronDownCircle } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import InvalidWallet from "./InvalidWal/InvalidWallet";

/* global BigInt */

import {
  company1,
  binanceNetwork,
  company2,
  company3,
  company4,
  Arbitrum,
  Ethereum,
  Ellipse,
  Triangle,
  Infini,
  Optim,
  Micro,
  unlock,
  coutDown
} from "../../../images/images";
import SingleProject from "./SingleProject/SingleProject";
import styles from "./AllProject.module.css";
import { useAccount, useSigner } from "wagmi";
import { ethers } from "ethers";
import TableData from "../TableData/TableData";

const AllProject = () => {

  const iconF = [
    {
      id: 1,
      name: "Arbitrum",
      image: Arbitrum
    },
    {
      id: 2,
      name: "Ethereum",
      image: Ethereum
    },
    {
      id: 3,
      name: "Ellipse",
      image: Ellipse
    },
    {
      id: 4,
      name: "Triangle",
      image: Triangle
    },
    {
      id: 5,
      name: "Infini",
      image: Infini
    },

    {
      id: 6,
      name: "Optim",
      image: Optim
    },
  ]

  const cryptoData = [
    {
      id: 11,
      name: "Arbitrum",
      image: Arbitrum,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      claim: [
        {
          id: 111,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          notClaim: false,
          buy: false,
        },
        {
          id: 112,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          notClaim: true,
          bool: false
        },
        {
          id: 113,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 114,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 115,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 116,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 117,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 118,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 119,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 120,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 121,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 122,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 12,
      name: "Arbitrum",
      image: Arbitrum,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      // Active: true,
      totalCounts: "06",
      claim: [
        {
          id: 113,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true,
        },
        {
          id: 114,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 115,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 116,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 13,
      name: "Arbitrum",
      image: Arbitrum,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,

      claim: [
        {
          id: 117,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true
        },
        {
          id: 118,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 119,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 120,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 121,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },

      ]
    },
    {
      id: 14,
      name: "Ethereum",
      image: Ethereum,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,

      claim: [
        {
          id: 122,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 123,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 124,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 125,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 15,
      name: "Ethereum",
      image: Ethereum,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,
      claim: [
        {
          id: 126,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 127,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 128,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 129,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 130,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 16,
      name: "Ethereum",
      image: Ethereum,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,
      claim: [
        {
          id: 131,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 132,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 133,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 134,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 17,
      name: "Ellipse",
      image: Ellipse,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,

      claim: [
        {
          id: 135,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true
        },
        {
          id: 136,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 137,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 138,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 18,
      name: "Ellipse",
      image: Ellipse,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,

      claim: [
        {
          id: 139,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true
        },
        {
          id: 140,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 141,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 142,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 19,
      name: "Triangle",
      image: Triangle,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,

      claim: [
        {
          id: 143,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true
        },
        {
          id: 144,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 145,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 146,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 147,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 20,
      name: "Triangle",
      image: Triangle,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,

      claim: [
        {
          id: 148,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true
        },
        {
          id: 149,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 150,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 151,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 21,
      name: "Triangle",
      image: Triangle,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,
      claim: [
        {
          id: 152,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true
        },
        {
          id: 153,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 154,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 155,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 156,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 22,
      name: "Infini",
      image: Infini,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,

      claim: [
        {
          id: 157,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true
        },
        {
          id: 158,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 159,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 200,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 23,
      name: "Infini",
      image: Infini,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,

      claim: [
        {
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true
        },
        {
          id: 202,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 203,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 204,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 205,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 24,
      name: "Infini",
      image: Infini,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,
      claim: [
        {
          id: 206,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true
        },
        {
          id: 207,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 208,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 209,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 25,
      name: "Optim",
      image: Optim,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,

      claim: [
        {
          id: 210,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true
        },
        {
          id: 211,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 212,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 213,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 214,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
    {
      id: 26,
      name: "Optim",
      image: Optim,
      projectName: "crypto project",
      remainingTokens: "190,0000,000",
      tokenPrice: "1.00",
      availableTokens: "0",
      lockedTokens: "0",
      count: "02",
      totalCounts: "06",
      Active: false,

      claim: [
        {
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: true
        },
        {
          id: 216,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 217,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
        {
          id: 218,
          tokenUnlock: "20%",
          amountUnlock: "4590",
          time: "20 Jan,2023,11:12am",
          bool: false
        },
      ]
    },
  ]

  const { data: signer } = useSigner();
  const { address } = useAccount();

  const [unlocked, setUnlocked] = useState(0);
  const [totalPurchase, setTotalPurchase] = useState(0);
  const [isClaimed, setisClaimed] = useState(false);
  const [totalUnclaimed, settotalUnclaimed] = useState(0);
  const [price, setPrice] = useState(0);
  const [filterData, setFilterData] = useState(cryptoData);
  const [open, setOpen] = useState(false);
  const [openTable, setOpenTable] = useState(null);
  const [allVesting, setAllVesting] = useState();


  let idoAddress = "0x42536a4b05d21Fbc8eC9e51223150b0afbF24D82";
  let idoAbi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "purchaser",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TokensPurchased",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "Whitelisted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "buyers",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "calculateUserTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "checkWhitelist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "contribute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "endTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalRaised",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWhitelistLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hardcap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isBuyer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isLive",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isWhitelistRound",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isWhitelisted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minimimumPurchase",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "publicCap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "saleToken",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_hardcap",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_softcap",
          "type": "uint256"
        }
      ],
      "name": "setHardcap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_min",
          "type": "uint256"
        }
      ],
      "name": "setMinimumPurchase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_start",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_end",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_wlEnd",
          "type": "uint256"
        }
      ],
      "name": "setTimes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "softcap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userContributions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userPurchase",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "userTotalContributions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "whitelist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "whitelistCap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "whitelistEndTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "whitelistLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "whitelists",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawETH",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawSaleToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "xbjdjwkkde",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  let arb_provider = new ethers.providers.JsonRpcProvider("https://arb1.croswap.com/rpc");
  let bsc_provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org");

  let inferAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "calculateRewards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "claimCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cycle",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "emergencyWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getClaimPerCycle",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialize",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isInitialized",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "lastClaimed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxCycle",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "totalClaimed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "updateToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_users",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_balances",
          "type": "uint256[]"
        }
      ],
      "name": "updateUsersAndBalances",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  let hash_provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org");
  const getunlocked = async () => {
    try {
      let inferAddress = "0xE3ccbF51ec5E501231975f3Ea07eF8d70c35b59B";
      let infer = new ethers.Contract(inferAddress, inferAbi, arb_provider);
      let total = await infer.calculateRewards(address);

      let ido = new ethers.Contract(idoAddress, idoAbi, bsc_provider);
      let totalPurchased = BigInt(await ido.userTotalContributions(address)) * BigInt(167);

      let initial6percent = totalPurchased * BigInt(625) / BigInt(10000);
      let initial25percent = totalPurchased * BigInt(2500) / BigInt(10000);

      let oldClaim = initial25percent + initial6percent;

      let newClaim = BigInt(await infer.totalClaimed(address));

      console.log(newClaim, "newClaim")
      console.log(oldClaim, "oldClaim")
      console.log(totalPurchased, "totalPurchasedr")

      let unclaimed = BigInt(totalPurchased) - BigInt(oldClaim) - BigInt(newClaim);
      console.log(unclaimed, "unclaimed")
      // let totalUnclaimed = await infer.totalUnclaimed(address);
      // let Sixpercent = totalPurchased * 0.0625;
      // let twentyfivepercent = totalPurchased * 0.25;
      // let percentages = BigInt(Sixpercent) + BigInt(twentyfivepercent);
      // totalUnclaimed = BigInt(totalUnclaimed);
      // console.log(totalPurchased, "totalPurchased")
      // console.log(totalUnclaimed, "totalUnclaimed")
      // console.log(Sixpercent, "Sixpercent")
      // console.log(twentyfivepercent, "twentyfivepercent")
      // console.log(percentages, "percentages")


      // let final = BigInt(totalPurchased) - BigInt(totalUnclaimed) - percentages;

      settotalUnclaimed(ethers.utils.formatEther(unclaimed));


      setTotalPurchase(ethers.utils.formatEther(totalPurchased));
      // // console.log(ethers.utils.formatEther(totalC));
      setUnlocked(ethers.utils.formatEther(total));
    } catch (e) {
      console.log(e)
    }
  };

  // const getIsClaimed = async () => {
  //   let inferAddress = "0x4D843cD8541744ba678645bDF0c6054B487999eb";
  //   let infer = new ethers.Contract(inferAddress, inferAbi, arb_provider);
  //   try {
  //     let isClaimed = await infer.isClaimed(address);
  //     console.log(isClaimed)
  //     setisClaimed(isClaimed);
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  
  const claim = async () => {
    let arb_provider = new ethers.providers.JsonRpcProvider("https://arb1.croswap.com/rpc");
    let inferAddress = "0xE3ccbF51ec5E501231975f3Ea07eF8d70c35b59B";
    let infer = new ethers.Contract(inferAddress, inferAbi, signer);
    try {
      return await infer.claim();
    } catch (e) {
      console.log(e)
    }
  }

  const getHTEPrice = async () => {
    let url = "https://api.coingecko.com/api/v3/simple/price?ids=hepton&vs_currencies=usd"
    const res = await fetch(url)
    const data = await res.json()
    console.log(data["hepton"].usd)
    setPrice((data["hepton"].usd))
  }

  React.useEffect(() => {
    getunlocked();
    // getIsClaimed();
    getHTEPrice();
  }, [address, signer]);
  const [searchValue, setSearchValue] = useState("");
  const [sortBy, setSortBy] = useState("All Vesting");
  const allSortByItems = [
    // "Active Vesting",
    // "Ended Vesting",
    // "Claimed Vesting",
    // "unclaimed vesting",
    "All Vesting",
    "Claimable Vesting"
  ];
  const [dropDown, setDropDown] = useState(false);
  const projects = [
    {
      logo: "https://pbs.twimg.com/profile_images/1624393158456143874/tdEGrujS_400x400.jpg",
      name: "Hepton L3",
      symbol: "HTE",
      status: { text: "Active Project", value: "Active vesting" },
      remainingToken: totalPurchase * 167,
      tokenPrice: 1,
      claimOn: { logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png", name: "Arbitrum Network" },
      unclaimedValue: totalUnclaimed,
      unlockNext: "September 8 2023 05:30:01",
      vestingEnds: "April 27 2024 05:30:01",
      availableTokens: {
        bnb: unlocked,
        usd: (unlocked * price),
      },
      func: claim,
      claimable: {
        text: unlocked <= 0 ? "No Vesting" : !isClaimed ? "Claim Vesting" : "Vesting Claimed",
        value: unlocked <= 0 ? false : !isClaimed ? true : false,
      },
    },
    // {
    //   logo: company2,
    //   name: "CRYPTO Project",
    //   status: { text: "Active Project", value: "active vesting" },
    //   remainingToken: 0,
    //   tokenPrice: 1,
    //   claimOn: { logo: binanceNetwork, name: "Binance Network" },
    //   unclaimedValue: 5000,
    //   unlockNext: "May 01 2023 05:30:01",
    //   vestingEnds: "May 01 2023 05:30:01",
    //   availableTokens: {
    //     bnb: 5806,
    //     usd: 5000,
    //   },
    //   claimable: {
    //     text: "Claimed Vesting",
    //     value: true,
    //   },
    // },
    // {
    //   logo: company3,
    //   name: "CRYPTO Project",
    //   status: { text: "Active Project", value: "active vesting" },
    //   remainingToken: 0,
    //   tokenPrice: 1,
    //   claimOn: { logo: binanceNetwork, name: "Binance Network" },
    //   unclaimedValue: 5000,
    //   unlockNext: "May 01 2023 05:30:01",
    //   vestingEnds: "May 01 2023 05:30:01",
    //   availableTokens: {
    //     bnb: 586,
    //     usd: 5000,
    //   },
    //   claimable: {
    //     text: "Claimed Vesting",
    //     value: true,
    //   },
    // },
    // {
    //   logo: company4,
    //   name: "CRYPTO Project",
    //   status: { text: "Active Project", value: "active vesting" },
    //   remainingToken: 0,
    //   tokenPrice: 1,
    //   claimOn: { logo: binanceNetwork, name: "Binance Network" },
    //   unclaimedValue: 5000,
    //   unlockNext: "May 01 2023 05:30:01",
    //   vestingEnds: "May 01 2023 05:30:01",
    //   availableTokens: {
    //     bnb: 0,
    //     usd: 0,
    //   },
    //   claimable: {
    //     text: "Unclaimed Vesting",
    //     value: false,
    //   },
    // },
  ];



  const sortedProjects = projects
    .filter((project, _) => {
      const statusValue = project.status.value.toLowerCase();
      const claimable = project.claimable.text.toLowerCase();
      const newProjects =
        statusValue === sortBy.toLocaleLowerCase() ||
        claimable === sortBy.toLowerCase();

      return newProjects;
    })
    .filter((project, _) =>
      project.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  const handleIcon = (element) => {
    const filtersData = cryptoData.filter((items) => (items.name === element.name))
    setFilterData(filtersData)
  }

  const handleClicked = (idx) => {
    setOpen(pre => !pre)
    setOpenTable(idx === openTable ? null : idx)
  }

  const handleDrop = (e) => {
    if (sortBy === "Claimable Vesting") {
        // you can update the claiming vesting here 
    } else {
      setFilterData(filterData)
    }
  }

  return (
    <><div className={styles.wrapper}>
      <div className="container">
        <div className={styles.allProject}>
          <div className={styles.titleAndHeader}>
            {/* <h4 className={styles.title}>All your projects</h4> */}
            <div className={styles.searchAndFilter}>
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
                      onClick={() => setDropDown((prev) => !prev)} />
                  ) : (
                    <BiChevronDownCircle
                      className={styles.arrow}
                      onClick={() => setDropDown((prev) => !prev)} />
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
                            handleDrop(el);
                          }}
                        >
                          {el}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.inputContainer}>
                <RiSearchLine className={styles.searchIcon} />
                <input
                  type="text"
                  className={styles.input}
                  name="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search projects" />
              </div>
            </div>
            <div className={styles.filterIcon}>
              <h4>Select Network</h4>
              <div className={styles.icons}>
                {iconF.map((item) => (
                  <img key={item.id} src={item.image} alt={item.name} onClick={() => handleIcon(item)} />
                ))}
              </div>
            </div>
          </div>
          <div className={dropDown ? styles.dropList : styles.normalList}>
            {filterData.map((data, index) => (
              <>
                <div className={styles.dataList} key={index}>
                  <div className={styles.upper}>
                    <div className={styles.leftData}>
                      <img src={company2} alt="icon" />
                      <div className={styles.titleBox}>
                        <h4>{data.projectName}</h4>
                        <p>Remaining tokens: <span> {data.remainingTokens} BNB</span></p>
                      </div>
                    </div>
                    <div className={styles.rightData}>
                      <div className={styles.innerBox}>
                        <div className={styles.prices}>
                          <h5>Token Price</h5>
                          <p>${data.tokenPrice}</p>
                        </div>
                        <p className={styles.border}></p>
                        <div className={styles.claims}>
                          <h4>Claim Network</h4>
                          <div className={styles.network}>
                            <img src={data.image} alt="coins" />
                            <h3>{data.name}  Network </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lower}>
                    <div className={styles.tokenBnb}>
                      <div className={styles.avail}>
                        <div className={styles.Reserved}>
                          <img src={Micro} alt="lock" />
                          <h4>Available Token</h4>
                        </div>
                        <h5 className={styles.bnb}><span>{data.availableTokens} BNB</span>  ≈ $ 12,000</h5>
                      </div>
                      <div className={styles.buttonBox}>
                        <button className={styles.buttonone}>claim Refund</button>
                        {/* <div className={styles.chev}> */}

                        <button className={styles.buttonsecond} onClick={() => handleClicked(data.id)}>
                          <p>Claim</p>
                          {open && openTable === data.id ?
                            <i className="fa-solid fa-chevron-up"></i>
                            :
                            <i className="fa-solid fa-chevron-down"></i>}
                          {/* claim */}

                        </button>
                        {/* <i></i> */}
                        {/* </div> */}
                      </div>
                      <div className={styles.rightData}>
                        <div className={styles.innerRight}>
                          <div className={styles.lockToken}>
                            <div className={styles.locks}>
                              <img src={unlock} alt="lock" />
                              <p>Locked Token</p>
                            </div>
                            <h5><span> {data.lockedTokens} BNB </span> ≈$ 12,000</h5>
                          </div>
                          <p className={styles.border}></p>
                          <div className={styles.counts}>
                            <div className={styles.counting}>
                              <img src={coutDown} alt="count" />
                              <h4>Vesting counts</h4>
                            </div>
                            <h5>{data.count} of {data.totalCounts} Months</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={openTable === data.id ? styles.table : styles.tableNo}>
                    <TableData item={data.claim} />
                  </div>
                </div>

              </>
            ))}
          </div>

          <div className={styles.projects}>
            {sortedProjects.map((el, i) => (
              <SingleProject {...el} key={i} price={price} totalUnclaimed={totalUnclaimed} />
            ))}
          </div>
          <div className={styles.walletBox}>
            <InvalidWallet />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AllProject;
