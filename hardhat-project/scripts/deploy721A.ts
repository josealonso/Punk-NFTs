import { BigNumber } from "ethers";
import { ethers } from "hardhat";

async function main() {
  // URL from where we can extract the metadata for the ObjectsV2
  const metadataURL = "ipfs://QmPJ97MiYZngyNcJTp8VWa97KwtELSPyUzZnz1WuVZM7qy/";  // Uploaded to Pignata on 25 June 2022
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so ObjectsV2Contract here is a factory for instances of our ObjectsV2 contract.
  */
  const ObjectsV2Contract = await ethers.getContractFactory("ObjectNFTsV2");
  const RANDOM_ADDRESS = "0xc275DC8bE39f50D12F66B6a63629C39dA5BAe5bd";

  // deploy the contract
  let price = 2; //ethers.BigNumber.from("2");
  const deployedObjectsV2Contract = await ObjectsV2Contract.deploy("MyNFT", "YFT", metadataURL, price.toString()); //  RANDOM_ADDRESS);
  // collectionName = _collectionName;
  // collectionSymbol = _collectionSymbol;
  // baseURI = _baseURI;
  // price = _price;
  // makerAddress = _makerAddress;

  //  deployedObjectsV2Contract.mi
  await deployedObjectsV2Contract.deployed();

  // print the address of the deployed contract
  console.log("ObjectsV2 Contract Address:", deployedObjectsV2Contract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
