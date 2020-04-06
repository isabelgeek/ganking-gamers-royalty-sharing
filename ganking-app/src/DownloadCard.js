import React from 'react';
import { drizzleConnect } from 'drizzle-react';
import { Heading, Link, Text, Card, Box } from 'rimble-ui';

const DownloadCard = ({ accounts, drizzzleStatus, ...props }) => {
  return (
    <Box {...props}>
      <Card height={'100%'}>
        <Heading.h3 pb={3}>Download</Heading.h3>
        <Text>
          You are a franchisor and can{' '}
          <Link
            fontSize={'inherit'}
            href="https://siasky.net/_AFZyd0oJ_fys7AAGQ7hb6NsEDZlZ9srKUAhWq_3JdyXog"
            title="Download Video"
            download="animatic01.mp4"
          >
            download
          </Link>{' '}
          the ganking video
        </Text>
      </Card>
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  };
};

export default drizzleConnect(DownloadCard, mapStateToProps);
