import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tag from '@components/Tag';

const Home: React.FC = () => {
  return (
    <Box
      minHeight='100vh'
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box>
          <Typography variant='h3' >Global Components</Typography>
          <hr />

          <Typography>Tag: </Typography>
          <br />
          <Tag variant='fill'>
            <h4>Tag Fill</h4>
          </Tag>
          <br />
          <Tag variant='border'>
            <h4>Tag Border</h4>
          </Tag>

        </Box>
      </Box>
    </Box>
  );
};

export default Home;
