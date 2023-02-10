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
      <Box
        bgcolor="transparent"
        width="max-content"
        border="1px solid #DEDEDE"
        borderRadius="30px"
        padding="8px 10px"
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      bgcolor="inputBg"
      padding="8px 10px"
      borderRadius="30px"
      width="max-content"
    >
      {children}
    </Box>
  );
};

Tag.propTypes = {
  variant: PropTypes.oneOf(['fill', 'border']).isRequired
};

export default Tag;
