import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import LaunchPad from "./components/LaunchPad/LaunchPad";
import VestingDashboard from "./pages/VestingDashboard";
import Minter from "./pages/Minter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@rainbow-me/rainbowkit/styles.css";

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  bsc,
  avalanche,
  gnosis,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Staking from "./pages/Staking";
import Sidebar from "./components/Voting/Sidebar/Sidebar";
import VotingHome from "./pages/VotingHome";

window.Buffer = window.Buffer || require("buffer").Buffer;

const hepton = {
  id: 404,
  name: "Hepton Testnet",
  network: "hepton",
  iconUrl:
    "https://pbs.twimg.com/profile_images/1624393158456143874/tdEGrujS_400x400.jpg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Hepton",
    symbol: "HTE",
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.hepton.io"],
    },
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://testnet.heptonscan.com" },
  },
  testnet: true,
};

// const Arb = {
//   id: 42161,
//   name: "Arbitrum Mainnet",
//   network: "hepton",
//   iconUrl:
//     "https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png",
//   iconBackground: "#fff",
//   nativeCurrency: {
//     decimals: 18,
//     name: "Arbitrum",
//     symbol: "ETH",
//   },
//   rpcUrls: {
//     default: {
//       http: ["https://api.solidhash.io/mainnet/arbitrum/dac6f6f3-da85-49ad-b196-51377040b773"],
//     },
//   },
//   blockExplorers: {
//     default: { name: "Arbiscan", url: "https://arbiscan.io" },
//   },
//   testnet: false,
// };

const { chains, provider } = configureChains(
  [mainnet, bsc, arbitrum, polygon, optimism, avalanche],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "e4600bbdb356ec1f0d2dd8930ce3e74c",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme()}
          showRecentTransactions={true}
        >
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/minter" element={<Minter />}></Route>

            <Route path="/vesting" element={<VestingDashboard />}></Route>
            <Route path="/ido/:id" element={<LaunchPad />}></Route>

            <Route path="/staking" element={<Staking />} ></Route>

            <Route path="/voting" element={<Sidebar />} >
              <Route index element={<VotingHome />} />
            </Route>
          </Routes>
          <Footer />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
