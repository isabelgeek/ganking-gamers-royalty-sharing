# GANKING APP CONTRACTS
These are the Ganking dApp smart contracts.
You will deploy the smart contract and mint the token.

Shared royalty tokens follow a withdraw pattern to avoid re-entrancy, maximum number of loops and double-withdrawals.

Please follow the same steps as in the `ganking-tokens` example.
Remember that you will need an account with test ether (Ropsten) in your wallet.

You will also need to create several wallet accounts:
- DEVELOPER_ADDRESS: It is the address of the Game Developer.
- CREATOR_ADDRESS: It is the address of the creator of the digital good that you will get with the token purchase.

## Setup
Go to the `ganking-app-contracts` directory.
Once there, run the following command in your terminal:

`yarn install`

## Compile smart contracts
In your terminal, please run the following command:

`truffle compile`

## Deploy smart contracts
Deploy the smart contracts and mint the Ganking (GANKING) token using Truffle, too.
Run the below command in the terminal:

`truffle migrate --network --ropsten`

**GankingToken**

_Contract address_: 0xDe541Ab2E3B029c412Ac07624e13e4E94Fe467b2

_Transaction Hash_: 0x2f2a17707315ac752a0be9e127a4a10204115fcfb1aaec6edef2455857bec45f

_TokenTracker_: Ganking(GANKING)

**GankingTraderApp** 

_Contract address_: 0x3e65011235A389502A536285DA532070df96A5d8

_Transaction Hash: 0xf77cd25aa450a020f22904e04d9a3b07d87d26ffac32e58c502f3caf683af19d


## License

[Apache 2.0](LICENSE)
