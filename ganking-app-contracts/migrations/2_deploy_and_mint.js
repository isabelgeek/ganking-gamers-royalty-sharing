const GankingToken = artifacts.require('GankingToken');
const GankingTraderApp = artifacts.require('GankingTraderApp');

const ipfsClient = require('ipfs-http-client');

const ipfsConfig = {
  host: 'ipfs.infura.io',
  port: 5001,
  options: {
    protocol: 'https'
  }
};

module.exports = async (deployer, network, accounts) => {

  // The Ganking Token ID
  const tokenId = web3.utils.toBN(1);

  // The game developer ethereum wallet address
  const theGameDeveloper = process.env.DEVELOPER_ADDRESS || accounts[0];

  // The item/video/merchant creator ethereum wallet address
  const theItemCreator = process.env.CREATOR_ADDRESS || accounts[1];

  // Deploy our GankingToken
  await deployer.deploy(GankingToken, 'Ganking', 'GANKING', 10);
  const token = await GankingToken.deployed();

  // Deploy the trader app and pass in the token contract
  await deployer.deploy(GankingTraderApp, token.address, tokenId);
  const app = await GankingTraderApp.deployed();

  // Set the token to have the app as the only trader
  await token.setTraderApp(app.address);

  // The upload the json metadata defined by ERC721
  const path = './token_1_metadata.json';
  const ipfs = ipfsClient(ipfsConfig.host, ipfsConfig.port, ipfsConfig.options);
  const ipfsResult = await ipfs.addFromFs(path, { pin: true });

  // See 'metadata section' https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
  const metaDataURI = `https://ipfs.infura.io/ipfs/${ipfsResult[0].hash}`;

  // Do the minting with our metadata URI
  await token.mintWithTokenURI(theGameDeveloper, tokenId, metaDataURI);

  // Add Item Creator as franchisor
  await token.addFranchisor(theItemCreator, tokenId);

  // Set this token up to be traded by the app contract
  await token.setTraderApp(app.address);
};
