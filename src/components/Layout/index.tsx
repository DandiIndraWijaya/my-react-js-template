import React from 'react';
import { Box, Container } from '@mui/material';
import PropTypes from 'prop-types';
import Header from './Header';

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box minHeight='100vh'>
      <Header />
      <Container sx={{ backgroundColor: '#D6D6D6' }}>
        {children}
      </Container>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
