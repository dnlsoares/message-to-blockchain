require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    korvan: {
      url: process.env.STAGING_KORVAN_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    rinkeby: {
      url: process.env.STAGING_RINKEBY_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};