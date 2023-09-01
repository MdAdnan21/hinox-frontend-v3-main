import React from "react";
import styles from "./LaunchPadSkelenton.module.css";
import { useParams } from "react-router-dom";
import AboutProject from "./AboutProject/AboutProject";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import Rate from "./Rate/Rate";
import HalfRadialChart from "./Chart/HalfRadialChart";
import BuyUbs from "./BuyUbs/BuyUbs";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { useSigner, useConnect, useNetwork } from "wagmi";
import { toast } from "react-toastify";
import axios from "axios";
import { useSwitchNetwork } from "wagmi";
import { useProvider } from "wagmi";
import { erc20ABI } from "wagmi";
import moment from "moment";
/* global BigInt */
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
const LaunchPadSkelenton = () => {
  // const { id: idoAddress } = useParams();
  // const { chain } = useNetwork();
  // const { openConnectModal } = useConnectModal();
  // //
  // const { chains, error, isLoading, pendingChainId, switchNetwork } =
  //   useSwitchNetwork();
  // const [chainID, setChainID] = React.useState(56);
  // const { address, isConnected } = useAccount();
  // const { data: signer } = useSigner();
  // const [isWhitelisted, setIsWhitelisted] = React.useState(false);

  // const [isWLRound, setIsWLRound] = React.useState(true);
  // const [isPublicRound, setIsPublicRound] = React.useState(false);
  // const [amount, setAmount] = React.useState(50);
  // const [UserPurchased, setUserPurchased] = React.useState(0);
  // const [maxAllocation, setMaxAllocation] = React.useState(1000);
  // const [publicCap, setPublicCap] = React.useState(0);
  // const [wlCap, setWlCap] = React.useState(0);
  // const [endTime, setEndTime] = React.useState(0);
  // const [startTime, setStartTime] = React.useState(0);
  // const [approved, setApproved] = React.useState(false);
  // const [tokenSymbol, setTokenSymbol] = React.useState("TKN");

  // const [wlCount, setwlCount] = React.useState(0);
  // const [maxWL, setMaxWL] = React.useState(600);

  // const [IDOrate, setIDORate] = React.useState(0);
  // const [isLive, setIsLive] = React.useState(false);

  // const [minPurchase, setMinPurchase] = React.useState(50);

  // const [details, setDetails] = React.useState({});

  // let [softcap, setSoftcap] = React.useState(0);
  // let [hardcap, setHardcap] = React.useState(90000);

  // let [totalRaised, setTotalRaised] = React.useState(0);

  // let hash_provider = new ethers.providers.JsonRpcProvider(
  //   "https://bsc-dataseed.binance.org"
  // );
  // let idoAbi = [
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "purchaser",
  //         type: "address",
  //       },
  //       {
  //         indexed: false,
  //         internalType: "uint256",
  //         name: "value",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "TokensPurchased",
  //     type: "event",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "_user",
  //         type: "address",
  //       },
  //     ],
  //     name: "Whitelisted",
  //     type: "event",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "_user",
  //         type: "address",
  //       },
  //     ],
  //     name: "calculateUserTokens",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "_user",
  //         type: "address",
  //       },
  //     ],
  //     name: "checkWhitelist",
  //     outputs: [
  //       {
  //         internalType: "bool",
  //         name: "",
  //         type: "bool",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "_amount",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "contribute",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "endTime",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "getTotalRaised",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "getWhitelistLength",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "hardcap",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "_rate",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "_publicCap",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "_whitelistCap",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "_minimimumPurchase",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "initialize",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "isLive",
  //     outputs: [
  //       {
  //         internalType: "string",
  //         name: "",
  //         type: "string",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "isWhitelistRound",
  //     outputs: [
  //       {
  //         internalType: "bool",
  //         name: "",
  //         type: "bool",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     name: "isWhitelisted",
  //     outputs: [
  //       {
  //         internalType: "bool",
  //         name: "",
  //         type: "bool",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "minimimumPurchase",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "publicCap",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "rate",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "saleToken",
  //     outputs: [
  //       {
  //         internalType: "contract IERC20",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "_hardcap",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "_softcap",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "setHardcap",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "_min",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "setMinimumPurchase",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "_start",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "_end",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "_wlEnd",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "setTimes",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "softcap",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "startTime",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "token",
  //     outputs: [
  //       {
  //         internalType: "contract IERC20",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "totalSold",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     name: "userContributions",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     name: "userPurchase",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "_user",
  //         type: "address",
  //       },
  //     ],
  //     name: "userTotalContributions",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "whitelist",
  //     outputs: [
  //       {
  //         internalType: "bool",
  //         name: "",
  //         type: "bool",
  //       },
  //     ],
  //     stateMutability: "payable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "whitelistCap",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "whitelistEndTime",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "whitelists",
  //     outputs: [
  //       {
  //         internalType: "address",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "withdrawETH",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "withdrawSaleToken",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  // ];

  // const ido = new ethers.Contract(idoAddress, idoAbi, hash_provider);
  // const chainCheck = () => {
  //   if (!chain) return;
  //   if (chain.id != chainID) {
  //     switchNetwork(chainID);
  //   }
  // };
  // const { data: provider } = useProvider();

  // const getIDOData = async () => {
  //   let url =
  //     "https://-app-8smiq.ondigitalocean.app/launchpad/launchpads/" +
  //     idoAddress;
  //   const { data } = await axios.get(url);
  //   setDetails(data);
  //   console.log(data);
  //   setTokenSymbol(data.tokenSymbol);
  // };
  // React.useEffect(() => {
  //   getIDOData();
  // }, []);

  // const whitelistFunc = async () => {
  //   if (wlCount >= maxWL) {
  //     toast.error("Whitelist limit reached", {
  //       position: "top-center",
  //       theme: "colored",
  //     });
  //     return;
  //   }
  //   const wl = new ethers.Contract(idoAddress, idoAbi, signer);
  //   toast.loading("Whitelisting...", {
  //     position: "top-center",
  //     theme: "colored",
  //     toastId: "whitelist",
  //   });

  //   try {
  //     const tx = await wl.whitelist({
  //       value: ethers.utils.parseEther("0.0045"),
  //     });
  //     let receipt = await tx.wait();
  //     if (receipt.status === 1) {
  //       toast.dismiss("whitelist");
  //       toast.success("Whitelisted", {
  //         position: "top-center",
  //         theme: "colored",
  //       });
  //       await checkWhitelist();
  //     }
  //   } catch (e) {
  //     toast.dismiss("whitelist");
  //     toast.error("Whitelisting failed", {
  //       position: "top-center",
  //       theme: "colored",
  //     });
  //   }
  // };

  // const buyFunc = async () => {
  //   let contract = new ethers.Contract(idoAddress, idoAbi, signer);
  //   let value = ethers.utils.parseEther(String(amount));
  //   toast.loading("Contributing...", {
  //     position: "top-center",
  //     theme: "colored",
  //     toastId: "contributing",
  //   });
  //   try {
  //     let tx = await contract.contribute(value);
  //     let receipt = await tx.wait();
  //     if (receipt.status === 1) {
  //       toast.dismiss("contributing");
  //       toast.success("Contributed", {
  //         position: "top-center",
  //         theme: "colored",
  //       });
  //       await checkWhitelist();
  //       await getUserPurchase();
  //       await getTotalRaised();
  //     }
  //   } catch (e) {
  //     toast.dismiss("contributing");
  //     toast.error("Contribution failed", {
  //       position: "top-center",
  //       theme: "colored",
  //     });
  //   }
  // };

  // const checkWhitelist = async () => {
  //   if (!address) return;
  //   if (chain.id != chainID) return;
  //   const wl = new ethers.Contract(idoAddress, idoAbi, signer);
  //   try {
  //     const status = await wl.checkWhitelist(address);
  //     setIsWhitelisted(status);
  //     return status;
  //   } catch (e) {}
  // };
  // const getUserPurchase = async () => {
  //   if (!address) return;
  //   if (chain.id != chainID) return;
  //   try {
  //     const userPurchase = await ido.userTotalContributions(address);
  //     setUserPurchased(ethers.utils.formatEther(userPurchase));

  //     // get  Contribution
  //     const publicCap = await ido.publicCap();
  //     const whitelistCap = await ido.whitelistCap();

  //     console.log(ethers.utils.formatEther(publicCap));
  //     console.log(ethers.utils.formatEther(whitelistCap));
  //     setPublicCap(ethers.utils.formatEther(publicCap));
  //     let wl = whitelistCap;

  //     let tl = BigInt(publicCap) + BigInt(whitelistCap);
  //     setWlCap(ethers.utils.formatEther(tl));
  //     let total =
  //       ethers.utils.formatEther(whitelistCap) +
  //       ethers.utils.formatEther(publicCap);
  //   } catch (e) {}
  // };
  // const checkWLRound = async () => {
  //   try {
  //     const status = await ido.isWhitelistRound();
  //     console.log(status, "status");
  //     const liveStatus = await ido.isLive();
  //     console.log(liveStatus, "liveStatus");
  //     setIsLive(liveStatus);
  //     setIsWLRound(status);
  //     return status;
  //   } catch (e) {}
  // };

  // const getWLcount = async () => {
  //   try {
  //     let count = await ido.getWhitelistLength();
  //     setwlCount(parseInt(count));
  //   } catch (e) {}
  // };

  // const getContractData = async () => {
  //   let ido = new ethers.Contract(idoAddress, idoAbi, hash_provider);

  //   let rate = await ido.rate();
  //   setIDORate(String(rate));
  // };
  // getContractData();
  // const getEndTime = async () => {
  //   let ido = new ethers.Contract(idoAddress, idoAbi, hash_provider);
  //   try {
  //     let timeInSec = await ido.endTime();
  //     let endTime = new Date(timeInSec * 1000);
  //     setEndTime(endTime);
  //   } catch (e) {}
  // };
  // const getStartTime = async () => {
  //   let ido = new ethers.Contract(idoAddress, idoAbi, hash_provider);
  //   try {
  //     let timeInSec = await ido.startTime();
  //     let startTime = new Date(timeInSec * 1000);
  //     setStartTime(startTime);
  //   } catch (e) {}
  // };

  // const getTotalRaised = async () => {
  //   let ido = new ethers.Contract(idoAddress, idoAbi, hash_provider);
  //   try {
  //     let totalRaised = await ido.getTotalRaised();
  //     setTotalRaised(ethers.utils.formatEther(totalRaised));
  //   } catch (e) {}
  // };

  // const checkApproval = async () => {
  //   let usdtAddress = "0x55d398326f99059ff775485246999027b3197955";
  //   let usdt = new ethers.Contract(usdtAddress, erc20ABI, signer);
  //   try {
  //     let allowance = await usdt.allowance(address, idoAddress);
  //     let allowanceInUsdt = ethers.utils.formatEther(allowance);
  //     let allo = parseInt(allowanceInUsdt);
  //     if (BigInt(allo) >= BigInt(amount)) {
  //       setApproved(true);
  //     } else {
  //       setApproved(false);
  //     }
  //   } catch (e) {}
  // };
  // const approveUSDT = async () => {
  //   let usdtAddress = "0x55d398326f99059ff775485246999027b3197955";
  //   let usdt = new ethers.Contract(usdtAddress, erc20ABI, signer);
  //   try {
  //     let tx = await usdt.approve(idoAddress, ethers.constants.MaxUint256);
  //     let receipt = await tx.wait();
  //     if (receipt.status === 1) {
  //       toast.success("Approved", {
  //         position: "top-center",
  //         theme: "colored",
  //       });
  //       setApproved(true);
  //     }
  //   } catch (e) {
  //     toast.error("Approval failed", {
  //       position: "top-center",
  //       theme: "colored",
  //     });
  //   }
  // };

  // getWLcount();
  // checkWhitelist();
  // let wlButton = () => {
  //   if (!address) {
  //     return {
  //       text: "Connect Wallet",
  //       func: openConnectModal,
  //     };
  //   }

  //   if (chain.id != chainID) {
  //     return {
  //       text: "Switch Network",
  //       func: () => {
  //         chainCheck();
  //       },
  //     };
  //   }

  //   if (isWhitelisted) {
  //     return {
  //       text: "Whitelisted",
  //       // func: whitelistFunc
  //       func: () => {
  //         //disable button
  //         toast.error("Spot Reservation not Enabled", {
  //           position: "top-center",
  //           theme: "colored",
  //           toastId: "wl",
  //         });
  //       },
  //     };
  //   } else {
  //     return {
  //       text: "Whitelist",
  //       func: () => {
  //         whitelistFunc();
  //       },
  //     };
  //   }
  // };

  // let buyButton = () => {
  //   if (!address) {
  //     return {
  //       text: "Connect Wallet",
  //       func: openConnectModal,
  //     };
  //   }

  //   if (parseInt(amount) < minPurchase) {
  //     return {
  //       text: `Min Buy : ${minPurchase} USDT`,
  //       func: () => {
  //         toast.error("Min Contribution is 50 USDT", {
  //           position: "top-center",
  //           theme: "colored",
  //         });
  //       },
  //     };
  //   }
  //   if (chain.id != chainID) {
  //     return {
  //       text: "Switch Network",
  //       func: () => {
  //         chainCheck();
  //       },
  //     };
  //   }
  //   if (startTime > Date.now()) {
  //     let text = "IDO starts " + moment(startTime).fromNow();
  //     return {
  //       text: text,
  //       func: () => {
  //         toast.info("IDO not started", {
  //           position: "top-center",
  //           theme: "colored",
  //         });
  //       },
  //     };
  //   }

  //   // if (!isWhitelisted && isWLRound) {
  //   //   return {
  //   //     text: "Not Whitelisted",
  //   //     func: () => {
  //   //       toast.error("Cannot participate in WL Round", {
  //   //         position: "top-center",
  //   //         theme: "colored",
  //   //       });
  //   //     },
  //   //   };
  //   // }
  //   // if (!approved) {
  //   //   return {
  //   //     text: "Approve USDT",
  //   //     func: approveUSDT,
  //   //   };
  //   // }
  //   // if (approved) {
  //   //   return {
  //   //     text: "Approve USDT",
  //   //     func: approveUSDT,
  //   //   };
  //   // }
  //   if (!approved) {
  //     return {
  //       text: "No Live Round",
  //       func: null,
  //     };
  //   }
  //   if (approved) {
  //     return {
  //       text: "No Live Round",
  //       func: null,
  //     };
  //   }

  //   if (isWhitelisted && isWLRound) {
  //     return {
  //       text: "Contribute (WL Round)",
  //       func: buyFunc,
  //     };
  //   } else if (isWhitelisted && isPublicRound) {
  //     return {
  //       text: "Contribute",
  //       func: buyFunc,
  //     };
  //   } else {
  //     return {
  //       text: "Contribute",
  //       func: buyFunc,
  //     };
  //   }
  // };
  // buyButton = buyButton();
  // wlButton = wlButton();

  // React.useEffect(() => {
  //   getWLcount();
  //   getTotalRaised();
  //   checkApproval();
  //   getUserPurchase();
  //   getEndTime();
  //   getStartTime();
  //   checkWLRound();
  // }, [wlCount, isWhitelisted, address, amount]);

  // const rate = [
  //   {
  //     key: "Sale type:",
  //     value: "Public",
  //   },
  //   {
  //     key: "Token Name",
  //     value: details?.tokenName,
  //   },
  //   {
  //     key: "Symbol:",
  //     value: details?.tokenSymbol,
  //   },
  //   {
  //     key: "IDO Price:",
  //     value: "0.006 USDT",
  //   },
  //   {
  //     key: "Soft Cap:",
  //     value: details?.softcap + " USDT",
  //   },
  //   {
  //     key: "Hard Cap:",
  //     value: details?.hardcap + " USDT",
  //   },
  //   {
  //     key: "Max Purchase:",
  //     value: !address
  //       ? "Connect Wallet"
  //       : isWhitelisted
  //       ? wlCap + " USDT"
  //       : !isWhitelisted
  //       ? publicCap + " USDT"
  //       : "0 USDT",
  //   },
  // ];
  return (
    <div className="container">
      <div className={styles.launchPad}>
        <div className={styles.wrapper}>
          <div className={styles.aboutProject}>
            <AboutProject />
          </div>
          <div className={styles.rateContainer}>
            <Rate />
          </div>

          <HalfRadialChart />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.mobileAboutProject}>
            <AboutProject />
          </div>
          <ConnectWallet />
          <BuyUbs />
        </div>
      </div>
    </div>
  );
};

export default LaunchPadSkelenton;
