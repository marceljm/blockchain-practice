# Dapp with autonomous smart contracts and oracles

## Data from Oracles

Oracles are gateways used by smart contracts to interact with the outside world.

Trusted oracles:
- act as a proxy from Smart Contract to access external data
- used in private blockchain scenarios
- secure, reliable and resistant to manipulation
- centralized, single point of failure

## Trustless Oracles

What are some approaches to mitigate the lack of trust inherent in public oracles?

- Use large numbers of oracles (i.e. wisdom of the crowds)
- Get data from multiple sources
- Require oracles to have skin in the game using payment stakes

## Types Of Attacks

- Sybil: a single entity atempts to be multiple entities. Incetived by enviroments where there are no costs.
- Cartel: many entities try to create scenarios favor to them.
- Mirroring: oracles trying to influence the outcome of things.
- Freeloading: steal the output of other oracle and present as their own without paying the cost.
- Privacy: take advantage of access to access confidential data.

Prevention:
- block the means of communication with other Oracles
- block the ability to identify other oracles
- block the ability to see answers submitted by other oracles

## Data from Oracles

What is the best way to generate a truly random number in Solidity code?
- Blockchains are deterministic and true randomness is not possible.

How can Solidity functions that manipulate the state of a Smart Contract communicate results to client applications?
- Solidity functions can emit Events and client applications can use these as asynchronous triggers.

What is the cheapest way to store information in Ethereum Smart Contracts?
- Emit events with the information. It will automatically use cheap log storage.

