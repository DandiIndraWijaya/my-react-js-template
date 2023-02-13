
import React from 'react';
import { Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

interface Props {
  rate: number
}

const Rating: React.FC<Props> = ({ rate }: Props) => {
  return (
    <Box display="flex" alignItems="center">
      <Star fontSize="small" color="primary" />
      <Typography
        paddingTop="3px"
        marginLeft="4px"
        fontSize="14px"
        color="grayLabel">
        {rate}
      </Typography>
    </Box>
  );
};

export default Rating;
