import React, { useState } from "react";
import { BiChevronUpCircle, BiChevronDownCircle } from "react-icons/bi";
import styles from "./CreateToken.module.css";
import SuccessModal from "./SuccessModal/SuccessModal";
import {
  mintCoin,
  sticker,
  computing,
  hashing,
} from "../../../../images/images";
import { ethers } from "ethers";
import { useSigner } from "wagmi";
import { useNetwork } from 'wagmi'


/* global BigInt */

const CreateToken = ({ overlay }) => {
  const { chain, chains } = useNetwork()

  const [modal, setModal] = useState(false);
  const { data } = useSigner();
  // fitering
  const [sortBy, setSortBy] = useState("All");
  const allSortByItems = [
    "ALL",
    "Binance Chain",
    "Binance Chain",
    "Binance Chain",
  ];
  const [dropDown, setDropDown] = useState(false);
  //   end of filtering

  //   inputs

  const [values, setValues] = useState({
    tokenName: "",
    tokenSymbol: "",
    totalSupply: "",
    decimals: "18",
    contract: ""
  });

  const inputs = [
    {
      label: "Token Name",
      eg: "Bitcoin",
      icon: mintCoin,
      type: "text",
      name: "tokenName",
      placeholder: "Enter your token name",
    },
    {
      label: "Token Symbol",
      eg: "BTC",
      icon: sticker,
      type: "text",
      name: "tokenSymbol",
      placeholder: "Enter your token symbol",
    },
    {
      label: "Total Supply",
      eg: "1000 (Dont include decimals)",
      icon: computing,
      type: "number",
      name: "totalSupply",
      placeholder: "00000000000",
    },
    {
      label: "Decimals",
      eg: "18",
      icon: hashing,
      type: "number",
      name: "decimals",
      placeholder: "Enter your Decimals",
    },
  ];
  const handleKeyDown = (event) => {
    if (event.key !== "Backspace" && !/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // ends of inputs

  let abi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_symbol",
          type: "string",
        },
        {
          internalType: "uint8",
          name: "_decimals",
          type: "uint8",
        },
        {
          internalType: "uint256",
          name: "_totalSupply",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "allowance",
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
          name: "_spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
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
      name: "balanceOf",
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
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
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
          name: "_to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_from",
          type: "address",
        },
        {
          internalType: "address",
          name: "_to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  let bytecode =
    "60806040523480156200001157600080fd5b506040516200165c3803806200165c8339818101604052810190620000379190620004a1565b836000908162000048919062000792565b5082600190816200005a919062000792565b5081600260006101000a81548160ff021916908360ff160217905550806003819055506103e86003826200008f9190620008a8565b6200009b919062000922565b6004600073f4a89280c87f6aaf6ab9cdff39cbbab6561909bf73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555073f4a89280c87f6aaf6ab9cdff39cbbab6561909bf73ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6103e8600385620001689190620008a8565b62000174919062000922565b6040516200018391906200096b565b60405180910390a36103e86003826200019d9190620008a8565b620001a9919062000922565b81620001b6919062000988565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6103e86003856200025b9190620008a8565b62000267919062000922565b8462000274919062000988565b6040516200028391906200096b565b60405180910390a350505050620009c3565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002fe82620002b3565b810181811067ffffffffffffffff8211171562000320576200031f620002c4565b5b80604052505050565b60006200033562000295565b9050620003438282620002f3565b919050565b600067ffffffffffffffff821115620003665762000365620002c4565b5b6200037182620002b3565b9050602081019050919050565b60005b838110156200039e57808201518184015260208101905062000381565b60008484015250505050565b6000620003c1620003bb8462000348565b62000329565b905082815260208101848484011115620003e057620003df620002ae565b5b620003ed8482856200037e565b509392505050565b600082601f8301126200040d576200040c620002a9565b5b81516200041f848260208601620003aa565b91505092915050565b600060ff82169050919050565b620004408162000428565b81146200044c57600080fd5b50565b600081519050620004608162000435565b92915050565b6000819050919050565b6200047b8162000466565b81146200048757600080fd5b50565b6000815190506200049b8162000470565b92915050565b60008060008060808587031215620004be57620004bd6200029f565b5b600085015167ffffffffffffffff811115620004df57620004de620002a4565b5b620004ed87828801620003f5565b945050602085015167ffffffffffffffff811115620005115762000510620002a4565b5b6200051f87828801620003f5565b935050604062000532878288016200044f565b925050606062000545878288016200048a565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620005a457607f821691505b602082108103620005ba57620005b96200055c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006247fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620005e5565b620006308683620005e5565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620006736200066d620006678462000466565b62000648565b62000466565b9050919050565b6000819050919050565b6200068f8362000652565b620006a76200069e826200067a565b848454620005f2565b825550505050565b600090565b620006be620006af565b620006cb81848462000684565b505050565b5b81811015620006f357620006e7600082620006b4565b600181019050620006d1565b5050565b601f82111562000742576200070c81620005c0565b6200071784620005d5565b8101602085101562000727578190505b6200073f6200073685620005d5565b830182620006d0565b50505b505050565b600082821c905092915050565b6000620007676000198460080262000747565b1980831691505092915050565b600062000782838362000754565b9150826002028217905092915050565b6200079d8262000551565b67ffffffffffffffff811115620007b957620007b8620002c4565b5b620007c582546200058b565b620007d2828285620006f7565b600060209050601f8311600181146200080a5760008415620007f5578287015190505b62000801858262000774565b86555062000871565b601f1984166200081a86620005c0565b60005b8281101562000844578489015182556001820191506020850194506020810190506200081d565b8683101562000864578489015162000860601f89168262000754565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620008b58262000466565b9150620008c28362000466565b9250828202620008d28162000466565b91508282048414831517620008ec57620008eb62000879565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006200092f8262000466565b91506200093c8362000466565b9250826200094f576200094e620008f3565b5b828204905092915050565b620009658162000466565b82525050565b60006020820190506200098260008301846200095a565b92915050565b6000620009958262000466565b9150620009a28362000466565b9250828203905081811115620009bd57620009bc62000879565b5b92915050565b610c8980620009d36000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806342966c681161006657806342966c681461015d57806370a082311461018d57806395d89b41146101bd578063a9059cbb146101db578063dd62ed3e1461020b5761009e565b806306fdde03146100a3578063095ea7b3146100c157806318160ddd146100f157806323b872dd1461010f578063313ce5671461013f575b600080fd5b6100ab61023b565b6040516100b891906108dd565b60405180910390f35b6100db60048036038101906100d69190610998565b6102c9565b6040516100e891906109f3565b60405180910390f35b6100f96103bb565b6040516101069190610a1d565b60405180910390f35b61012960048036038101906101249190610a38565b6103c1565b60405161013691906109f3565b60405180910390f35b610147610572565b6040516101549190610aa7565b60405180910390f35b61017760048036038101906101729190610ac2565b610585565b60405161018491906109f3565b60405180910390f35b6101a760048036038101906101a29190610aef565b610665565b6040516101b49190610a1d565b60405180910390f35b6101c561067d565b6040516101d291906108dd565b60405180910390f35b6101f560048036038101906101f09190610998565b61070b565b60405161020291906109f3565b60405180910390f35b61022560048036038101906102209190610b1c565b610828565b6040516102329190610a1d565b60405180910390f35b6000805461024890610b8b565b80601f016020809104026020016040519081016040528092919081815260200182805461027490610b8b565b80156102c15780601f10610296576101008083540402835291602001916102c1565b820191906000526020600020905b8154815290600101906020018083116102a457829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516103a99190610a1d565b60405180910390a36001905092915050565b60035481565b600081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461044f9190610beb565b9250508190555081600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104a59190610beb565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104fb9190610c1f565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161055f9190610a1d565b60405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b600081600360008282546105999190610beb565b9250508190555081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105ef9190610beb565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106549190610a1d565b60405180910390a360019050919050565b60046020528060005260406000206000915090505481565b6001805461068a90610b8b565b80601f01602080910402602001604051908101604052809291908181526020018280546106b690610b8b565b80156107035780601f106106d857610100808354040283529160200191610703565b820191906000526020600020905b8154815290600101906020018083116106e657829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461075c9190610beb565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107b29190610c1f565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108169190610a1d565b60405180910390a36001905092915050565b6005602052816000526040600020602052806000526040600020600091509150505481565b600081519050919050565b600082825260208201905092915050565b60005b8381101561088757808201518184015260208101905061086c565b60008484015250505050565b6000601f19601f8301169050919050565b60006108af8261084d565b6108b98185610858565b93506108c9818560208601610869565b6108d281610893565b840191505092915050565b600060208201905081810360008301526108f781846108a4565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061092f82610904565b9050919050565b61093f81610924565b811461094a57600080fd5b50565b60008135905061095c81610936565b92915050565b6000819050919050565b61097581610962565b811461098057600080fd5b50565b6000813590506109928161096c565b92915050565b600080604083850312156109af576109ae6108ff565b5b60006109bd8582860161094d565b92505060206109ce85828601610983565b9150509250929050565b60008115159050919050565b6109ed816109d8565b82525050565b6000602082019050610a0860008301846109e4565b92915050565b610a1781610962565b82525050565b6000602082019050610a326000830184610a0e565b92915050565b600080600060608486031215610a5157610a506108ff565b5b6000610a5f8682870161094d565b9350506020610a708682870161094d565b9250506040610a8186828701610983565b9150509250925092565b600060ff82169050919050565b610aa181610a8b565b82525050565b6000602082019050610abc6000830184610a98565b92915050565b600060208284031215610ad857610ad76108ff565b5b6000610ae684828501610983565b91505092915050565b600060208284031215610b0557610b046108ff565b5b6000610b138482850161094d565b91505092915050565b60008060408385031215610b3357610b326108ff565b5b6000610b418582860161094d565b9250506020610b528582860161094d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ba357607f821691505b602082108103610bb657610bb5610b5c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610bf682610962565b9150610c0183610962565b9250828203905081811115610c1957610c18610bbc565b5b92915050565b6000610c2a82610962565b9150610c3583610962565b9250828201905080821115610c4d57610c4c610bbc565b5b9291505056fea2646970667358221220e7586b2842c065cc3fa243ecae097cb642b62962d61e5a4390a2a57eef8d4c2564736f6c63430008130033";
  let factory = new ethers.ContractFactory(abi, bytecode, data);

  const createToken = async () => {
    if (!values.tokenName) {
      alert("Token name is required");
      return;
    }
    if (!values.tokenSymbol) {
      alert("Token symbol is required");
      return;
    }
    if (!values.decimals) {
      alert("Token decimals is required");
      return;
    }
    if (!values.totalSupply) {
      alert("Total Supply is required");
    }
    const tx = await factory.deploy(
      values.tokenName,
      values.tokenSymbol,
      values.decimals,
      ethers.utils.parseUnits(values.totalSupply, values.decimals)
    );
    const receipt = await tx.deployed();
    console.log(receipt)
    setValues({ ...values, contract: receipt.address });
    setModal(true);
    console.log(receipt);
  };

  return (
    <>
      <div className={styles.createToken}>
        <div className={styles.spaceBetween}>
          <h4 className={styles.title}>Create your ERC20 Compliant Token</h4>

          {/* <div className={styles.filter}>
          <div
            className={styles.dropdown}
            style={{
              background: dropDown && "#242b33",
              borderRadius: dropDown && "20px",
            }}
          >
            <p className={styles.sortValue}>
              {" "}
              <span className={styles.sort}>Network: </span>{" "}
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
        </div> */}
        </div>
        <form action="#" className={styles.formContainer}>
          <div className={styles.form}>
            {inputs.map((el, i) => (
              <div className={styles.inputWrapper} key={i}>
                <label htmlFor="firtsName" className={styles.label}>
                  <span>{el.label}</span> <span>Ex : {el.eg}</span>
                </label>
                <div className={styles.inputContainer}>
                  <img src={el.icon} alt="#" className={styles.icon} />
                  <input
                    type={el.type}
                    id={el.name}
                    className={styles.input}
                    name={el.name}
                    value={values[el.name]}
                    onChange={onChange}
                    placeholder={el.placeholder}
                    onKeyDown={el.type === "number" ? handleKeyDown : null}
                  />
                </div>
              </div>
            ))}
            <p className={[styles.label, styles.fee].join(" ")}>
              <span>Fee:</span> <span>0.3% Total supply</span>
            </p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              createToken();
            }}
            className={styles.button}
          >
            {chain ? ` Mint on ${chain.name}` : "Connect Wallet"}
          </button>

        </form>
        {overlay && <div className={styles.overlay}></div>}
      </div>
      {modal && <SuccessModal {...values} setModal={setModal} />}
    </>
  );
};

export default CreateToken;
