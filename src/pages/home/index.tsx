import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from '@components/Layout';
import Cart from '@components/Cart';

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
          <Cart
            name="LAMEREI"
            description='Recycle Boucle Knit Cardigan Pink'
            price={120}
            quantity={3}
            image="/images/product_gridview.png"
          />
          <br />
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
