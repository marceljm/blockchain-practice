/*##########################
    CONFIGURATION
##########################*/

// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3")
var EthereumTransaction = require("ethereumjs-tx").Transaction
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var sendingAddress = '0x580d849B41FBe65526a9e5f84C4c801320E30Bed'
var receivingAddress = '0x8744357Fe752E95ADac7Bd89A15AE6e6E3808CC8'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)


/*##########################
    CREATE A TRANSACTION
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown 
// gas reference: https://ethstats.net/
gasPrice = web3.eth.getGasPrice().then(console.log)
transactionCount = web3.eth.getTransactionCount(sendingAddress).then(console.log)

var rawTransaction = {
    nonce: web3.utils.toHex(14),
    to: receivingAddress,
    gasPrice: web3.utils.toHex(gasPrice),
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
var privateKeySender = 'ae9eaadd3825af0ba5ed16f69897a58aa1ab52c08d0105f04dee4f6c35addb9c' 
var privateKeySenderHex = new Buffer.from(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)


/*#########################################
    Send the transaction to the network
#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network. 
var serializedTransaction = transaction.serialize(); 
web3.eth.sendSignedTransaction(serializedTransaction);