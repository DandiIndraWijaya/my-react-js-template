import React from 'react';
import { Box, Container } from '@mui/material';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box>
      <Header />
      <Container sx={{ minHeight: '100vh' }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
