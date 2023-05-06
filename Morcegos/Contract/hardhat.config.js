require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  allowUnlimitedContractSize: true,
  etherscan: {
    apiKey: process.env.ETHER_SCAN_KEY,
  }
};