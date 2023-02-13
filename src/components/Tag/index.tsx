import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

interface Props {
  variant: string
  children: React.ReactNode
  borderRadius?: string
  padding?: string
  width?: string
  height?: string
}

const Tag: React.FC<Props> = ({
  variant,
  children,
  borderRadius,
  padding,
  width,
  height
}: Props) => {
  if (variant === 'border') {
    return (
      <Box
        bgcolor="transparent"
        width={width}
        height={height}
        border="1px solid #DEDEDE"
        borderRadius={borderRadius}
        padding={padding}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      bgcolor="inputBg"
      padding={padding}
      borderRadius={borderRadius}
      width={width}
      height={height}
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

Tag.defaultProps = {
  borderRadius: '30px',
  padding: '8px 10px',
  width: 'max-content',
  height: 'auto'
};

Tag.propTypes = {
  variant: PropTypes.oneOf(['fill', 'border']).isRequired,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Tag;
