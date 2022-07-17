# Getting started

```bash
npm install -g truffle
mkdir sample-token
cd sample-token
truffle init
npm install --save @truffle/hdwallet-provider
npm install openzeppelin-solidity
touch contracts/SampleToken.sol
```

Edit truffle-config.js 

Create 2_initial_migration.js

```bash
export NODE_OPTIONS=--openssl-legacy-provider
truffle develop
compile
```

Deploy to local network
```
migrate --reset
```

Deploy to Rinkeby network
```
migrate --reset --network rinkeby
```

Access https://rinkeby.etherscan.io/ and search for the contract address

Open Metamask, select import token and paste the contract address