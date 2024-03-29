// Register an oracle with the contract
function registerOracle() external payable {
    // CODE EXERCISE: Require registration fee
    require(msg.value >= REGISTRATION_FEE);

    // CODE EXERCISE: Generate three random indexes (range 0-9) using generateIndexes for the calling oracle
    uint8[3] memory indexes = generateIndexes(msg.sender);

    // CODE EXERCISE: Assign the indexes to the oracle and save to the contract state
    oracles[msg.sender] = indexes;
}
