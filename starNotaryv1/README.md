# Getting started

Verify if you have Truffle installed:

```
truffle -v
```

Install Truffle or update it to the latest version:

```
npm install -g truffle
```

Create your project folder:
```
mkdir starNotaryv1
```

Move to the project folder:
```
cd starNotaryv1
```

Create your project using:
```
truffle unbox webpack
```

Prevents `Error: error:0308010C:digital envelope routines::unsupported`:
```
export NODE_OPTIONS=--openssl-legacy-provider
```

Setting up your project:
```
truffle develop
```

Check Truffle started in the URl `http://127.0.0.1:9545/`:

`Truffle Develop started at http://127.0.0.1:8545/`

You can Change the port in `truffle-config.js`.

Configuring your Private network in Metamask:

- Go to your Metamask Chrome Extension
- Use option, Connect using `Custom RPC`, at address `http://127.0.0.1:9545/`
- Chain ID: `1337`
- Currency Symbol: `ETH`
- Use the Private Keys provided by Truffle to import at least two accounts.
- The initial balance is 100 ETH for each account.

Write the contract file `contracts/starNotary.sol`.

Delete the default contacts `ConvertLib.sol` and `MetaCoin.sol`. Keep `Migrations.sol`.

Edit the migration file `migrations/2_deploy_contracts.js`.

Write the test file `test/TestStarNotary.js`

Delete the default files `metacoin.js` and `TestMetacoin.sol`.

Running test cases...
- run Truffle Development environment
- compile any changes in the Smart Contract
- migrate and create a fresh and clean Smart contract session
- run the test cases
```
truffle develop
compile
migrate --reset
test
```

Edit `app/src/index.html`

Edit `app/src/index.js`

Uncomment a few lines from `truffle-config.js`:
```json
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    ...
    develop: {
      port: 9545
    },
    ...
    mocha: {
      timeout: 10000
    },
```

Running... 1st terminal
```
truffle develop
compile
migrate --reset
```

Running... 2nd terminal
```
export NODE_OPTIONS=--openssl-legacy-provider
cd app
npm run dev
```

Open `http://localhost:8080/` and make sure the Metamask extension is installed, and you are logged into it, and also have imported the accounts.

