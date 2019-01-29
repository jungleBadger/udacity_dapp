var HDWalletProvider = require("truffle-hdwallet-provider");
var MNEMONIC = "job oil wood vocal valid borrow kit barely sock south silk guess";
var ENDPOINT = "https://rinkeby.infura.io/v3/249e1e028e8d433196a2b7e7e1a69ff9";
var NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker")


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        var wallet = new HDWalletProvider(MNEMONIC, ENDPOINT)
        var nonceTracker = new NonceTrackerSubprovider()
        wallet.engine._providers.unshift(nonceTracker)
        nonceTracker.setEngine(wallet.engine)
        return wallet
      },
      network_id: 4,
      // gas: 2000000,   // <--- Twice as much
      // gasPrice: 10000000000,
    }
  }
};