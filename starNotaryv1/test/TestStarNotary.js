// Importing the StartNotary Smart Contract ABI (JSON representation of the Smart Contract)
const StarNotary = artifacts.require("StarNotary");

var accounts; // List of development accounts provided by Truffle
var owner; // Global variable used in the tests cases

// This calls the StartNotary Smart contract and initialize it
contract('StarNotary', (accs) => {
    accounts = accs; // Assigning test accounts
    owner = accounts[0]; // Assigning the owner test account
});

// Test case example. It will test if the contract is able to return the starName property initialized in the contract constructor
// It is important to remember that all these test libraries use Promises. That's why we are using the keywords async and await for each function
// You can't declare a global instance variable of the contract. You need to create an instance for each test case
it('has correct name', async () => {
    let instance = await StarNotary.deployed(); // Making sure the Smart Contract is deployed and getting the instance.
    let starName = await instance.starName.call(); // Calling the starName property
    assert.equal(starName, "Awesome Udacity Star"); // Assert if the starName property was initialized correctly
});

// Test case example. It will test if the smart contract function claimStar assigns the Star to the owner address
it('can be claimed', async () => {
    let instance = await StarNotary.deployed(); // Making sure the Smart Contract is deployed and getting the instance.
    await instance.claimStar({ from: owner }); // Calling the Smart Contract function claimStar
    let starOwner = await instance.starOwner.call(); // Getting the owner address
    assert.equal(starOwner, owner); // Verifying if the owner address match with owner of the address
});

// Test case example. It will test if the smart contract function claimStar assigns the Star to the owner address and it can be changed
it('can change owners', async () => {
    let instance = await StarNotary.deployed();
    let secondUser = accounts[1];
    await instance.claimStar({ from: owner });
    let starOwner = await instance.starOwner.call();
    assert.equal(starOwner, owner);
    await instance.claimStar({ from: secondUser });
    let secondOwner = await instance.starOwner.call();
    assert.equal(secondOwner, secondUser);
});