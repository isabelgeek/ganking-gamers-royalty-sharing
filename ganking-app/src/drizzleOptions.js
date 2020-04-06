import GankingTraderApp from './contracts/GankingTraderApp';
import GankingToken from './contracts/GankingToken';
import Web3 from 'web3';

const options = {
  web3: {
    customProvider: new Web3.providers.WebsocketProvider('ws://127.0.0.1:7545')
  },
  contracts: [GankingTraderApp(), GankingToken()],
  events: {},
  polls: {
    accounts: 1500
  }
};

export default options;
