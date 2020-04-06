# GANKING TOKENS
The smart contracts making up the token economy of the Ganking application.
These are the Pay-it-Backward Tokens

A Test Shared Royalty Token implemented for testing purposes (a basic way to test the abstract token implementation).

## Setup
If you want to follow the steps to compile and deploy the smart contracts, you will need an INFURA api key and a mnemonic of a wallet with an account with test ether from ropsten testnet.

[Metamask](https://metamask.io)

[Infura](http://infura.io/)

[Ropsten](https://github.com/ethereum/ropsten)

[Ropsten Faucet](https://faucet.ropsten.be)

[Ropsten Etherscan](https://ropsten.etherscan.io)

[Truffle](https://www.trufflesuite.com)

Once you are in the directory **ganking-tokens** run in your terminal the following command:

`npm install`

## Compiling the smart contracts 
Truffle is used to compile the smart contracts.
Run the following command in your terminal:

`truffle compile`

## Deployment
Now it's time to deploy the smart contracts to the net. 
It is used the ropsten testnet, please run the following command in your terminal:

`truffle migrate --network ropsten`

**Migrations**

_Contract address_: 0x7A1bEc05Da91ba26bE4875b77f47c771004b1BEe

_Transaction Hash_: 0x91f8377f8d6b52146523135269baf0e96a45e168cff16b56f8c4aa874e3a4d13

**TestSharedRoyaltyToken**

_Contract address_: 0x68639d97De3302a275e298Cd9e8489F9bCe9a204

_Transaction Hash_: 0x04915c85eda87921ba5b3613e2dd41ca47b30efbba60bc26592cd3383f77fc8a

## License
Apache License Version 2.0

