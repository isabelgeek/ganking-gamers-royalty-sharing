export default () => {
  let networks = {
    // Ropsten
    '3': {
      address: '0x3e65011235A389502A536285DA532070df96A5d8',
      transactionHash:
        '0xf77cd25aa450a020f22904e04d9a3b07d87d26ffac32e58c502f3caf683af19d'
    }
  };

  if (process.env.NODE_ENV !== 'production') {
    const {
      networks: devNetworks
    } = require('../build/contracts/GankingTraderApp');

    networks = {
      ...networks,
      ...devNetworks
    };
  }

  return {
    networks,
    contractName: 'GankingTraderApp',
    abi: [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "deployedAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "withdrawer",
            "type": "address"
          }
        ],
        "name": "PaymentWithdrawn",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "changer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "oldPriceInWei",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newPriceInWei",
            "type": "uint256"
          }
        ],
        "name": "PriceChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "weiAmount",
            "type": "uint256"
          }
        ],
        "name": "Purchased",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "gankingToken",
        "outputs": [
          {
            "internalType": "contract GankingToken",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "gankingTokenId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "tokenPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "purchase",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "newPrice",
            "type": "uint256"
          }
        ],
        "name": "setTokenPrice",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getOwner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getTokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "possibleFranchisor",
            "type": "address"
          }
        ],
        "name": "isTokenFranchisor",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]
  };
};
