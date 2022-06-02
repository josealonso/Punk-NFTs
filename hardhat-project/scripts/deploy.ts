import { ethers } from "hardhat";

async function main() {
  // URL from where we can extract the metadata for the punks
  const metadataURL = "ipfs://QmZc7jp32oZNbaSGBLbMib4GU5YnGesvudHcE3o7EVqdjs/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so punksContract here is a factory for instances of our Punks contract.
  */
  const punksContract = await ethers.getContractFactory("PunkNFTs");

  // deploy the contract
  const deployedPunksContract = await punksContract.deploy(metadataURL);

  await deployedPunksContract.deployed();

  // print the address of the deployed contract
  console.log("Punks Contract Address:", deployedPunksContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
