import Love from '@components/Love';
import currency from '@helpers/currency';
import truncate from '@helpers/truncate';
import { Box, Typography } from '@mui/material';
import React from 'react';

interface Props {
  name: string
  description: string
  price: number
  rating: number
  image: string
  isLiked: boolean
}

const ProductGridView: React.FC<Props> = ({
  name,
  description,
  price,
  rating,
  image,
  isLiked
}: Props) => {
  return (
    <Box width="165px" position="relative" >
      <Box
        component="img"
        src={image}
        width="165px"
        height="220px"
      />
      <Box position="absolute" top="189px" right="9px">
        <Love isLiked={isLiked} />
      </Box>
      <Box>
        <Typography variant='bodySmall' color="black">{name}</Typography>
      </Box>
      <Box
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow= "ellipsis"
      >
        <Typography
          variant='bodySmall'
          color="grayLabel"
        >
          {description}
        </Typography>
      </Box>
      <Box>
        <Typography
          color="primary"
          fontSize="15px"
        >
          {currency(price)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductGridView;
