# Links

### [Understanding The DAO Attack](https://www.coindesk.com/learn/2016/06/25/understanding-the-dao-attack/)

Blockchain strategist David Siegel gives a step-by-step overview of the attack on The DAO for journalists and media members.

### [$30 Million: Ether Reported Stolen Due to Parity Wallet Breach](https://www.coindesk.com/markets/2017/07/19/30-million-ether-reported-stolen-due-to-parity-wallet-breach/)

A security bug in a major ethereum wallet has resulted in the loss of $30 million in funds.

### [Delegatecall / Callcode and Libraries](https://docs.soliditylang.org/en/v0.8.15/introduction-to-smart-contracts.html#delegatecall-callcode-and-libraries)

There exists a special variant of a message call, named delegatecall which is identical to a message call apart from the fact that the code at the target address is executed in the context (i.e. at the address) of the calling contract and msg.sender and msg.value do not change their values.

This means that a contract can dynamically load code from a different address at runtime. Storage, current address and balance still refer to the calling contract, only the code is taken from the called address.

### [Fallback Function](https://docs.soliditylang.org/en/v0.8.15/contracts.html#fallback-function)

A contract can have at most one fallback function, declared using either fallback () external [payable] or fallback (bytes calldata input) external [payable] returns (bytes memory output) (both without the function keyword). This function must have external visibility. A fallback function can be virtual, can override and can have modifiers.

The fallback function is executed on a call to the contract if none of the other functions match the given function signature, or if no data was supplied at all and there is no receive Ether function. The fallback function always receives data, but in order to also receive Ether it must be marked payable.

### [Solidity](https://docs.soliditylang.org/en/latest/index.html)

Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state.

Solidity is a curly-bracket language designed to target the Ethereum Virtual Machine (EVM). It is influenced by C++, Python and JavaScript. You can find more details about which languages Solidity has been inspired by in the language influences section.

### [Security Considerations](https://docs.soliditylang.org/en/latest/security-considerations.html)

While it is usually quite easy to build software that works as expected, it is much harder to check that nobody can use it in a way that was not anticipated.

In Solidity, this is even more important because you can use smart contracts to handle tokens or, possibly, even more valuable things. Furthermore, every execution of a smart contract happens in public and, in addition to that, the source code is often available.

### [Common Patterns](https://docs.soliditylang.org/en/latest/common-patterns.html)

- Withdrawal from Contracts
- Restricting Access
- State Machine

### [Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)

This guide is intended to provide coding conventions for writing Solidity code. This guide should be thought of as an evolving document that will change over time as useful conventions are found and old conventions are rendered obsolete.

### [Ethereum Smart Contract Security Best Practices](https://consensys.github.io/smart-contract-best-practices/)

This document provides a baseline knowledge of security considerations for intermediate Solidity programmers. It is maintained by ConsenSys Diligence, with contributions from our friends in the broader Ethereum community.

### [Consensys](https://consensys.net/)

Unlock Web3. Build on Ethereum. Collaborate worldwide.

With MetaMask, Infura, and a leading suite of blockchain products, we make it easy to build applications on Ethereum and participate in DeFi, NFTs, DAOs, and the metaverse.

### [Denial of Service](https://consensys.github.io/smart-contract-best-practices/attacks/denial-of-service/)

If attacker bids using a smart contract which has a fallback function that reverts any payment, the attacker can win any auction. When it tries to refund the old leader, it reverts if the refund fails. This means that a malicious bidder can become the leader while making sure that any refunds to their address will always fail. In this way, they can prevent anyone else from calling the bid() function, and stay the leader forever. A recommendation is to set up a pull payment system instead, as described earlier.

### [General Philosophy](https://consensys.github.io/smart-contract-best-practices/general-philosophy/)

Ethereum and complex blockchain programs are new and highly experimental. Therefore, you should expect constant changes in the security landscape, as new bugs and security risks are discovered, and new best practices are developed. Following the security practices in this document is therefore only the beginning of the security work you will need to do as a smart contract developer.

### [Attacks](https://consensys.github.io/smart-contract-best-practices/attacks/)

The following is a list of known attacks which you should be aware of, and defend against when writing smart contracts.

- Reentrancy: Intra- and inter-function reentrancy attacks and potentially faulty solutions to them.
- Oracle Manipulation: Manipulation of external data providers and potential solutions to oracle security issues.
- Frontrunning: A definition and taxonomy around frontrunning and related attacks.
- Timestamp Dependence: Attacks relating to the timing of a transaction.
- Insecure Arithmetic: Integer overflows and underflows.
- Denial of Service: Denial of service attacks through unexpected reverts and the block gas limit.
- Griefing: Attacks relating to bad faith players around a smart contract system.
- Force Feeding: Forcing Ether to be sent to smart contracts to manipulate balance checks.
- Deprecated/Historical: Attacks that are part of Ethereum's history and vulnerabilities that have been fixes on a (Solidity) compiler level.
- More: Where to find more information about vulnerabilities and weaknesses.

### [Learnings from the ETHSecurity Community](https://medium.com/coinmonks/learnings-from-the-ethsecurity-community-57431ae0ed5e)

The ETHSecurity community aims to encourage and support collaboration, research, and education around the topic of security in the Ethereum ecosystem. It does this by curating a repository of knowledge, facilitating communication, organizing conferences, and leading working groups for needed community projects. The community already has 170+ members and continues to gain traction with individuals and industry bodies alike.

### [(Not So) Smart Contracts](https://github.com/crytic/not-so-smart-contracts)

This repository contains examples of common Ethereum smart contract vulnerabilities, including code from real smart contracts. Use Not So Smart Contracts to learn about EVM and Solidity vulnerabilities, as a reference when performing security reviews, and as a benchmark for security and analysis tools.

### [Security Tools](https://ethereum-contract-security-techniques-and-tips.readthedocs.io/en/latest/security_tools/)

- Static Analysis
- Test Coverage
- Linters

### [Security Tools](https://consensys.github.io/smart-contract-best-practices/security-tools/)

This section is about tools that can detect vulnerabilities or help developers maintain a high code quality to reduce the likelihood and impact of vulnerabilities.

- Visualization: These tools are aimed at visualizing, EVM bytecode, smart contracts, and their control flow graphs.
- Static and Dynamic Analysis: Tools that employ various means of program analysis to find vulnabilities and weaknesses.
- Classification: Resources attempting to classify vulnerabilities and weaknesses in smart contracts.
- Testing: Tools for running, measuring, and managing smart contract related tests
- Linters and Formatters: Any tools that highlight code smells and make smart contract code adhere to format standards.

### [Mocha](https://mochajs.org/)

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

### [Build Secure Smart Contracts in Solidity](https://www.openzeppelin.com/contracts)

OpenZeppelin Contracts helps you minimize risk by using battle-tested libraries of smart contracts for Ethereum and other blockchains. It includes the most used implementations of ERC standards.

### [Access Control](https://docs.openzeppelin.com/contracts/4.x/api/access)

This directory provides ways to restrict who can access the functions of a contract or when they can do it.

- AccessControl: provides a general role based access control mechanism. Multiple hierarchical roles can be created and assigned each to multiple accounts.
- Ownable: is a simpler mechanism with a single owner "role" that can be assigned to a single account. This simpler mechanism can be useful for quick tests but projects with production concerns are likely to outgrow it.

### [OpenZeppelin / openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)

A library for secure smart contract development. Build on a solid foundation of community-vetted code.

- Implementations of standards like ERC20 and ERC721.
- Flexible role-based permissioning scheme.
- Reusable Solidity components to build custom contracts and complex decentralized systems.

### [Launching the Zeppelin community forum](https://blog.openzeppelin.com/launching-the-zeppelin-community-forum-5a706c2397ab/)

The Zeppelin community connects experts, beginners, and enthusiasts of smart contract and decentralized app development from all over the world. They come to our forum to help each other, get support, learn, and discuss security, design patterns, and best practices. The community is also home to the OpenZeppelin, ZeppelinOS, ZepKit, and Ethernaut open source projects.

### [Smart Contract Audit](https://blog.coinfabrik.com/category/smart-contracts/smart-contract-audit-smart-contracts/)

CoinFabrik smart contracts audit related content.

### [Security audits for distributed systems](https://www.openzeppelin.com/security-audits)

OpenZeppelin verifies that your distributed systems work as intended by performing an audit. Our engineers fully review your system’s architecture and codebase, and then write a thorough report that includes actionable feedback for every issue found.

### []()

### []()

### []()

### []()

### []()

### []()

### []()

### []()

### []()

### []()

### []()

### []()

### []()

### []()

### []()

### []()

