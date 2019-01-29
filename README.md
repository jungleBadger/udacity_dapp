### Contracts deploy
```
Compiling ./contracts/coffeebase/SupplyChain.sol...
Writing artifacts to ./build/contracts

Using network 'rinkeby'.

Running migration: 2_deploy_contracts.js
  Deploying FarmerRole...
  ... 0x2dd955d6c0cfe5caf0dadf2f63751b89e736e4de5927f91da8e064f582aad0fc
  FarmerRole: 0xfa1bd02c92500af8d2d1ae237c08290afb94a79a
  Deploying DistributorRole...
  ... 0x027623a8bd80903564b2b2804c502dca6eaa0ef4fad215beb6a100ca58f01608
  DistributorRole: 0xff15abeb5c649dea727c145f7b37db92bfa022f3
  Deploying RetailerRole...
  ... 0xd28e28e75323fec6e3d3fbd135e5826ab03b09ef4efe28e7d7628f9d3a575db8
  RetailerRole: 0xadf32d21dc3ea9ac5530982c29b41561dc3e8540
  Deploying ConsumerRole...
  ... 0x628e3c249cb203a63fb2097e38014b6c2a2ed3650ea967370a6e34f8dc928c2a
  ConsumerRole: 0xe9f73b41ef8350103e20119d88dc6b6ad4622e1c
  Deploying SupplyChain...
  ... 0xf6291713cdf0e2ef5aa002b79b41040bbfd1f807a2a82547a33fc380e00120fc
  SupplyChain: 0x86ab7f1576d7eda6e522b5fd6bad1fc513ebe287
Saving successful migration to network...
  ... 0xb43a7473446eeb6e69297e24c87e509b3c6f778a7b854dee822d264e2152b590
Saving artifacts...
```


### General steps

The Dapp frontend provides the access to Smart contracts capabilities through Metamask.

The user can query and manipulate the Beans process through the interface in order to roll out every piece of the process