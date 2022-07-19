# Getting started

```
mkdir starNotaryV2
truffle unbox webpack
npm install openzeppelin-solidity
```

Delete default files from `contracts` and `test`.

Write `contracts/StarNotary.sol`.

Edit `migrations/2_deploy_contracts.js`.

Compile:
```
truffle compile
```

Write `test/TestStarNotary.js`.

Open `truffle-config.js` and increase the `timeout`. The default value é "2000ms".

Test:
```
export NODE_OPTIONS=--openssl-legacy-provider
truffle develop
compile
migrate --reset
test
```