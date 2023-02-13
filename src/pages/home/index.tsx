import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ProductGridView, ProductListView } from '@components/Product';
import ProductHomePage from '@components/Product/Home';

const Home: React.FC = () => {
  const products = [
    {
      name: 'LAMEREI',
      description: 'Recycle Boucle Knit Cardigan Pink',
      price: 120,
      rating: 4.8,
      size: ['S', 'M', 'L'],
      image: '/images/product_listview.png',
      isLiked: false
    },
    {
      name: '21WN',
      description: 'reversible angora cardigan',
      price: 120,
      rating: 4.8,
      size: ['S', 'M', 'L'],
      image: '/images/product_listview.png',
      isLiked: true
    }
  ];

  const productsGridView = [
    {
      name: 'LAMEREI',
      description: 'Recycle Boucle Knit Cardigan Pink',
      price: 120,
      rating: 4.8,
      size: ['S', 'M', 'L'],
      image: '/images/product_gridview.png',
      isLiked: false
    },
    {
      name: '21WN',
      description: 'reversible angora cardigan',
      price: 120,
      rating: 4.8,
      size: ['S', 'M', 'L'],
      image: '/images/product_gridview.png',
      isLiked: true
    }
  ];

  const productHomePage = [
    {
      name: 'LAMEREI',
      description: 'Recycle Boucle Knit Cardigan Pink',
      price: 120,
      rating: 4.8,
      size: ['S', 'M', 'L'],
      image: '/images/product_homepage.png',
      isLiked: false
    },
    {
      name: '21WN',
      description: 'reversible angora cardigan',
      price: 120,
      rating: 4.8,
      size: ['S', 'M', 'L'],
      image: '/images/product_homepage.png',
      isLiked: true
    }
  ];

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

          <Typography>Product: </Typography>
          <br />
          <Typography>Product List View</Typography>
          <Box height={10} />
          {
            products.map((product, key) => {
              return (
                <>
                  <ProductListView
                    key={key}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                    size={product.size}
                    isLiked={product.isLiked}
                  />
                  <Box height={10} />
                </>
              );
            })
          }

          <br />
          <Typography>Product Grid View</Typography>
          <Box height={10} />
          {
            productsGridView.map((product, key) => {
              return (
                <>
                  <ProductGridView
                    key={key}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    isLiked={product.isLiked}
                  />
                  <Box height={20} />
                </>
              );
            })
          }

          <br />
          <Typography>Product Home Page</Typography>
          <Box height={10} />
          {
            productHomePage.map((product, key) => {
              return (
                <>
                  <ProductHomePage
                    key={key}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                  />
                  <Box height={20} />
                </>
              );
            })
          }

          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
