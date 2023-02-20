import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from '@components/Layout';
import Button from '@components/Button';

const Home: React.FC = () => {
  return (
    <Layout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box>
          <Typography variant='h3' >Global Components</Typography>
          <hr />
          <br />
          <Button >Button</Button>
          <br />
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
