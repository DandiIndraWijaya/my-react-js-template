import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home: React.FC = () => {
  return (
    <Box
      height='100vh'
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box>
          <Box>
            <Typography
              variant="title"
            >
              Title
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
            >
          Subtitle 1
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="subtitle2"
            >
          Subtitle 2
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="bodyLarge"
            >
            Body Large
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="bodyMedium"
            >
            Body Medium
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="bodySmall"
            >
            Body Small
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Home;
