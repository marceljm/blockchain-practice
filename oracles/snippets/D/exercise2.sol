// Generate a request
function fetchFlightStatus(string flight, uint256 timestamp) external {
    // Generate a number between 0 - 9 to determine which oracles may respond

    // CODE EXERCISE 2: Replace the hard-coded value of index with a random index based on the calling account
    uint8 index = getRandomIndex(msg.sender);

    // Generate a unique key for storing the request
    bytes32 key = keccak256(abi.encodePacked(index, flight, timestamp));
    oracleResponses[key] = ResponseInfo({requester: msg.sender, isOpen: true});

    // CODE EXERCISE 2: Notify oracles that match the index value that they need to fetch flight status
    emit OracleRequest(index, flight, timestamp);
}
