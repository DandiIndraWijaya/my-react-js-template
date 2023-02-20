import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';
import currency from '@helpers/currency';
import PropTypes from 'prop-types';

interface Props {
  name: string
  description: string
  quantity: number
  price: number
  image: string
}

const Cart: React.FC<Props> = ({
  name,
  description,
  quantity,
  price,
  image
}: Props) => {
  return (
    <Box display="flex" alignItems="center" >
      <Box width="115px" height="150px">
        <Box
          width="100%"
          margin="auto"
          component="img"
          src={image}
          alt={`${name} image`}
          display="block"
          height="auto"
        />
      </Box>
      <Box width="12px" />
      <Box width="231px">
        <Typography variant="subtitle1">{name}</Typography>
        <Box
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow= "ellipsis"
        >
          <Typography variant="bodyMedium">
            {description}
          </Typography>
        </Box>

        {/* Quantity */}
        <Box display="flex" alignItems="center" marginY="12px">
          <Box>
            <IconButton size='small' sx={{ border: '1px solid #C4C4C4' }}>
              <Remove />
            </IconButton>
          </Box>
          <Box
            width="50px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography>{quantity}</Typography>
          </Box>
          <Box>
            <IconButton size='small' sx={{ border: '1px solid #C4C4C4' }}>
              <Add />
            </IconButton>
          </Box>
        </Box>
        {/* End Quantity */}

        <Typography color="primary.main" marginTop="4px">
          {currency(price)}
        </Typography>

      </Box>
    </Box>
  );
};

Cart.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};

export default Cart;
