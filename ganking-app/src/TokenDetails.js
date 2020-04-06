import React from 'react';
import { drizzleConnect } from 'drizzle-react';
import { Flex, Box, Text, Heading } from 'rimble-ui';

const TokenDetails = ({ children }) => (
  <>
    <Flex alignItems={'center'} py={2}>
      <Box width={[1, 1 / 2, 7 / 12]}>
        <Heading.h2>Ganking App</Heading.h2>
        <Text>
          The Shared Crypto Royalty Economy is here. <br />
          A DeFi showcase in innovative crypto payout mechanisms for non-blockchain games. <br />
          <Text.span bold>A challenge from OPGames at Gitcoin Funding The Future hackathon</Text.span>.
        </Text>
        <Text>Created April 5th, 2020.</Text>
      </Box>

      <Box py={3} width={[1, 1 / 2, 5 / 12]}>
        {' '}
        {children}
      </Box>
    </Flex>
  </>
);

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  };
};

export default drizzleConnect(TokenDetails, mapStateToProps);
