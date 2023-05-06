const hre = require("hardhat");

async function main() {
  const Web3DevMarketplace = await hre.ethers.getContractFactory("Web3DevMarketplace");
  const web3DevMarketplace = await Web3DevMarketplace.deploy();

  await web3DevMarketplace.deployed();

  console.log("Web3DevMarketplace deployed to:", web3DevMarketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });