// import
var Web3 = require('web3')

// local blockchain network via Ganache
var url = 'HTTP://127.0.0.1:7545' // 8545 if using CLI

// connect
var web3 = new Web3(url)

// list accounts
web3.eth.getAccounts().then(accounts => console.log(accounts));
var address = '0x973BF8cE0C74eC343a9e2817610d7f726287A9ac'

// balance
web3.eth.getBalance(address, (err, bal) => { balance = bal })

// convert balance from wei to ether
web3.utils.fromWei(balance, 'ether')

// transaction count
web3.eth.getTransactionCount(address).then(console.log);