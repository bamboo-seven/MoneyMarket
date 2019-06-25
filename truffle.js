// "use strict";

// const WalletProvider = require("truffle-wallet-provider");
// const Wallet = require('ethereumjs-wallet');
// const fs = require('fs');
// const path = require('path');

// const networks = ["rinkeby", "kovan", "ropsten", "mainnet"];

// const infuraNetworks = networks.reduce((networks, network) => {
//   const envVarName = `${network.toUpperCase()}_PRIVATE_KEY`
//   let privateKeyHex = process.env[envVarName];
//   const networksHome = process.env['ETHEREUM_NETWORKS_HOME'];

//   if (networksHome && !privateKeyHex) {
//     try {
//       // Try to read from file
//       const networkPathResolved = path.join(fs.realpathSync(networksHome), network);
//       privateKeyHex = fs.readFileSync(networkPathResolved, 'UTF8').trim();
//     } catch (e) {
//       // File does not exist or is inaccessible
//     }
//   }

//   if (privateKeyHex) {
//     const privateKey = Buffer.from(privateKeyHex, "hex")
//     const wallet = Wallet.fromPrivateKey(privateKey);
//     const provider = new WalletProvider(wallet, `https://${network}.infura.io/v3/bf0206a21f8d4b47ae5101ae8f905631`); //

//     return {
//       ...networks,
//       [network]: {
//         host: "localhost",
//         port: 8545,
//         network_id: "*",
//         gas: 6600000,
//         gasPrice: 15000000000, // 15 gwei
//         provider,
//       }
//     };
//   } else {
//     return networks;
//   }
// }, {});

// let mochaOptions = {};

// if (process.env.SOLIDITY_COVERAGE) {
//   mochaOptions = {
//     enableTimeouts: false,
//     grep: /@gas/,
//     invert: true
//   };
// }

// module.exports = {
//   networks: {
//     ...infuraNetworks,
//     development: {
//       host: "localhost",
//       port: 8545,
//       network_id: "*",
//       // TODO: Use `test` instead and change back to 4600000
//       gas: 6600000,
//       gasPrice: 20000,
//     },
//     // See example coverage settings at https://github.com/sc-forks/solidity-coverage
//     coverage: {
//       host: "localhost",
//       network_id: "*",
//       gas: 0xfffffffffff,
//       gasPrice: 0x01,
//       port: 8555
//     },
//     test: {
//       host: "localhost",
//       port: 8545,
//       network_id: "*",
//       gas: 6721975,
//       gasPrice: 20000
//     }
//   },
//   solc: {
//     optimizer: {
//       enabled: true
//     }
//   },
//   mocha: mochaOptions,
//   contracts_build_directory: process.env.CONTRACTS_BUILD_DIRECTORY || undefined
// };


/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura API
 * keys are available for free at: infura.io/register
 *
 *   > > Using Truffle V5 or later? Make sure you install the `web3-one` version.
 *
 *   > > $ npm install truffle-hdwallet-provider@web3-one
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');
var infuraKey = process.env.INFURA_APIKEY;
var mnemonic = process.env.MNEMONIC;

//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      gasPrice: 20000000000,
      gas: 8000000
    },

    production: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraKey}`),
      network_id: 1,         // Mainnet's id
      gas: 6721975,          // Gas limit used for deploys
      gasPrice: 10000000000, // Gas price used for deploys: 10gwei
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${infuraKey}`),
      network_id: 42, // Kovan's id
      gas: 6721975,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3, // ropsten's id
      gas: 6721975,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4, // ropsten's id
      gas: 6721975,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    enableTimeouts: false,
    useColors: true,
    bail: true
  },

  // solc: {
  //   optimizer: {
  //     enabled: true,
  //     runs: 200
  //   }
  // },

  // Configure your compilers
  compilers: {
    solc: {
      // todo select a suitable version.
      version: "0.5.0", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
      //  evmVersion: "byzantium"
      }
    }
  }
}
