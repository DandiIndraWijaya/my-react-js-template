import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

interface Props {
  variant: string
  children: React.ReactNode
}

const Tag: React.FC<Props> = ({ variant, children }) => {
  if (variant === 'border') {
    return (
      <Box>{children}</Box>
    );
  }

  return (
    <Box>{children}</Box>
  );
};

Tag.propTypes = {
  variant: PropTypes.oneOf(['fill', 'border']).isRequired
};

export default Tag;
