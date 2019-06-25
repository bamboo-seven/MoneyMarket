"use strict";

const MoneyMarket = artifacts.require("./MoneyMarket.sol");
const {deploy} = require('../scripts/javascript/deployUtils');

module.exports = function(deployer, network) {
  deploy(deployer, network, MoneyMarket);
};


// "use strict";

// const MoneyMarket = artifacts.require("./MoneyMarket.sol");

// module.exports = function(deployer) {
//   deployer.deploy(MoneyMarket);
// };