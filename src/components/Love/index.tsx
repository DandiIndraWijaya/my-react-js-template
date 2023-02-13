import React from 'react';
import PropTypes from 'prop-types';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

interface Props {
  isLiked: boolean
}

const Love: React.FC<Props> = ({ isLiked }: Props) => {
  if (isLiked) {
    return <Favorite color="primary" />;
  }

  return <FavoriteBorder color="primary" />;
};

Love.propTypes = {
  isLiked: PropTypes.bool.isRequired
};

export default Love;
