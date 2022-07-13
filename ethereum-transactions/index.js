/*##########################
    CONFIGURATION
##########################*/

// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3")
var EthereumTransaction = require("ethereumjs-tx").Transaction
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var sendingAddress = '0x973BF8cE0C74eC343a9e2817610d7f726287A9ac'
var receivingAddress = '0x59e09B3409801dE36B5D860CaE946146021cE3Cc'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)


/*##########################
    CREATE A TRANSACTION
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown 
var rawTransaction = {
    nonce: web3.utils.toHex(1),
    to: receivingAddress,
    gasPrice: web3.utils.toHex(20000000),
    gasLimit: web3.utils.toHex(30000),
    value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
    data: web3.utils.toHex("")
}

// -- Step 5: View the raw transaction
rawTransaction

// -- Step 6: Check the new account balances (they should be the same)
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...


/*##########################
    Sign the Transaction
##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender
var privateKeySender = '377b65bfa99e950a0a12651819e701f34c59775a1c080da51d4afd647bcdf3a9' 
var privateKeySenderHex = new Buffer.from(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)


/*#########################################
    Send the transaction to the network
#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network. 
var serializedTransaction = transaction.serialize(); 
web3.eth.sendSignedTransaction(serializedTransaction);