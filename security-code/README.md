# Receive, Send and Transfer Funds

## Ether and Payment Fundamentals

- 1 ETH = 1,000,000,000,000,000,000 wei (10^18)
- Types of contracts: Contract Accounts (CA) and Externally Owned Accounts (EOA).
- EOA: can receive, hold and send funds. It has a private key.
- CA: can receive and hold funds. But it can't send funds (without code) because it doesn't have a private key.

## Working With Funds

- `payable`: enables a function to receive funds.
- `msg.value`: amount of funds received in wei.
- fallback function: generic way to receive funds in a contract. It has no name. There is only one per contract. Funds sent from a contract to a fallback function in another contract have a low gas stipend of 2300.
- Funds received by a contract stay in the CA. The funds can be transferred to an EOA or used by contract functions. Since a CA has no private key, it's not possible to transfer funds manually, so funds can be trapped forever in the CA.
- `address.transfer()`: safe way to transfer funds, throws error on failure. Gas stipend 2300.
- `address.send()`: somewhat safe, returns false. Gas stipend 2300.
- `address.call.value()`: unsafe. Can use all available gas.
- Use "pull" and not "push" for sending funds. The account owner should call a custom function to withdraw funds. 
- Use always `msg.sender` before transferring funds! Don't use `tx.origin`.

## SafeMath Library

- Open source library provided by Open Zeppelin.
- Always use that for contract arithmetic to prevents overflow and underflow.
```
using SafeMath for uint256;
```

## Payment Protection Patterns

- "Checks - Effects - Interation", "Rate Limiting" and "Re-entrancy Guard".
```
require(balance[msg.sender] > 0);     // use require to check the balance
uint256 prev = balance[msg.sender];   // save the value in a variable
balance[msg.sender] = 0;              // change the state variables BEFORE the transfer
msg.sender.transfer(prev);            // don't use it as the conditional of an "if"
```

## Checks - Effects - Interation

```
using SafeMath for uint256;
mapping(address => uint256) private sales;

function safeWithdraw(uint256 amount) external {
    // Checks
    require(msg.sender == tx.origin, "Contracts not allowed");
    require(sales[msg.sender] >= amount, "Insuficient funds");
    // Effects
    uint256 amount = sales[msg.sender];
    sales[msg.sender] = sales[msg.sender].sub(amount);
    // Interaction
    msg.sender.transfer(amount);
}
```

## Rate Limiting

- Controls a contract operation frequency. Minimizes loss.
- Best implemented as a modifier that accepts time as parameter.
```
using SafeMath for uint256;
uint256 private enabled = block.timestamp;

modifier rateLimit(uint time) {
    require(block.timestamp >= enabled, "Rate limiting in effect");
    enabled = enabled.add(time);
    _;
}

function safeWithdraw(uint256 amount) external rateLimit(30 minutes) {
    // ...
}
```

## Re-entrancy Guard

- prevents a contract function from calling itself multiple times in a single transaction

```
using SafeMath for uint256;
uint265 private counter = 1;

modifier entrancyGuard() {
    counter = counter.add(1);
    uint256 guard = counter;
    _;                                                  // returns the execution flow to safeWithdraw()
    require(guard == counter, "That is not allowed");
}

function safeWithdraw(uint256 amount) external entrancyGuard() {
    // ...
}
```

## Best Practices

1. Kepp functions `private` or `internal` unless they are needed outside your contract
2. Debit before credit to minimize the risky of reentrancy attacks
3. Another contract may use `delegatecall()` to call your contract function. Be aware of this and code defensively.
4. For time-sensitive opeations, keep in mind that `now` is a synonym for `block.timestamp` and can be manipulated by miners.
5. Prefix all calls to external contracts with `untrusted`.
6. On-chain data is always public. Do not store any sensitive information.
7. Do not make state changes in function modifiers. Use them only for assertions.
8. Keep fallback functions short and require `msg.data.lenght` equals zero.
9. Explicitly mark visibility of functions and state variables.
10. Does it really need to be on chain? Blockchain is a slow and expensive database!

