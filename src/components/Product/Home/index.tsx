import currency from '@helpers/currency';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import React from 'react';

interface Props {
  name: string
  description: string
  price: number
  image: string
}

const ProductHomePage: React.FC<Props> = ({
  name,
  description,
  price,
  image
}: Props) => {
  return (
    <Box width="165px" textAlign="center" >
      <Box
        component="img"
        src={image}
        width="165px"
        height="200px"
      />
      <Box>
        <Typography
          variant='bodySmall'
          color="black"
        >
          {`${name} ${description}`}
        </Typography>
      </Box>
      <Box>
        <Typography
          color="primary"
          fontSize="15px"
          marginTop="5px"
        >
          {currency(price)}
        </Typography>
      </Box>
    </Box>
  );
};

ProductHomePage.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default ProductHomePage;
