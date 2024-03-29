// Called by oracle when a response is available to an outstanding request
// For the response to be accepted, there must be a pending request that is open
// and matches one of the three Indexes randomly assigned to the oracle at the
// time of registration (i.e. uninvited oracles are not welcome)
function submitOracleResponse(
    uint8 index,
    string flight,
    uint256 timestamp,
    uint8 statusId
) external {
    require(
        (oracles[msg.sender][0] == index) ||
            (oracles[msg.sender][1] == index) ||
            (oracles[msg.sender][2] == index),
        "Index does not match oracle request"
    );

    // CODE EXERCISE 3: Require that the response is being submitted for a request that is still open
    bytes32 key = keccak256(abi.encodePacked(index, flight, timestamp));
    require(
        oracleResponses[key].isOpen,
        "Flight or timestamp do not match oracle request"
    );

    oracleResponses[key].responses[statusId].push(msg.sender);

    // Information isn't considered verified until at least MIN_RESPONSES
    // oracles respond with the *** same *** information
    if (oracleResponses[key].responses[statusId].length >= MIN_RESPONSES) {
        // CODE EXERCISE 3: Prevent any more responses since MIN_RESPONSE threshold has been reached
        oracleResponses[key].isOpen = false;

        // CODE EXERCISE 3: Announce to the world that verified flight status information is available
        emit FlightStatusInfo(flight, timestamp, statusId, true);

        // Save the flight information for posterity
        bytes32 flightKey = keccak256(abi.encodePacked(flight, timestamp));
        flights[flightKey] = FlightStatus(true, statusId);
    } else {
        // Oracle submitting response but MIN_RESPONSES threshold not yet reached

        // CODE EXERCISE 3: Announce to the world that verified flight status information is available
        emit FlightStatusInfo(flight, timestamp, statusId, false);
    }
}
