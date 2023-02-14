import React from 'react';
import { Box, Container, AppBar, Toolbar } from '@mui/material';
import { Search, ShoppingBagOutlined } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <AppBar elevation={0} sx={{ backgroundColor: '#E6E9EE' }}>
      <Container>
        <Box display="flex" alignItems="center" paddingY="10px">
          <Box flexGrow="1" />

          <Box flexGrow="1" >
            <center>
              <Box
                component="img"
                src="/images/logo.png"
                display="block"
                textAlign="center"
              />
            </center>
          </Box>

          <Box
            flexGrow="1"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Box>
              <Search fontSize="medium" sx={{ marginTop: '10px' }} />
            </Box>
            <Box width="16px" />
            <Box>
              <ShoppingBagOutlined
                fontSize="medium"
                sx={{ marginTop: '10px' }}
              />
            </Box>
          </Box>

        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
