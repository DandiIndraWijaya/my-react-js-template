import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tag from '@components/Tag';
import { currency, truncate } from '@helpers/index';
import Rating from '@components/Rating';
import Love from '@components/Love';

interface Props {
  name: string
  description: string
  price: number
  rating: number
  size: string[]
  image: string
  isLiked: boolean
}

const ProductListView: React.FC<Props> = ({
  name,
  description,
  price,
  rating,
  size,
  image,
  isLiked
}: Props) => {
  return (
    <Box>
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
          <Typography variant="bodyMedium">
            {truncate(description, 30, 'ellipsis')}
          </Typography>
          <Typography color="primary.main" marginTop="4px">
            {currency(price)}
          </Typography>
          <Box marginTop="11px">
            <Rating rate={rating} />
          </Box>

          <Box display="flex" alignItems="center" marginTop="11px">
            <Box display="flex" alignItems="center" flexGrow={1}>
              <Typography color="grayLabel" fontSize="14px">
                Size
              </Typography>
              <Box display="flex" alignItems="flex-start">
                <Box width="6px" />
                {
                  size.map((s, key) => {
                    return (
                      <Box key={key} margin="3px">
                        <Tag
                          variant="border"
                          borderRadius="100%"
                          width="25px"
                          height="25px"
                          padding="0"
                        >
                          <Typography fontSize="12px">{s}</Typography>
                        </Tag>
                      </Box>
                    );
                  })
                }
              </Box>
            </Box>
            <Box><Love isLiked={isLiked} /></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

ProductListView.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  size: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired
};

export default ProductListView;
