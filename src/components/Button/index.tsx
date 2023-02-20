/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Box, Button as MuiButton } from '@mui/material';
import PropTypes from 'prop-types';

interface Props {
  variant?: string
  size?: string
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  children,
  size,
  variant,
  onClick
}: Props) => {
  let padding = '8px 30px';

  if (size === 'small') {
    padding = '8px 30px';
  } else if (size === 'medium') {
    padding = '12px 33px';
  } else if (size === 'large') {
    padding = '16px 36px';
  }

  if (variant === 'outlined') {
    return (
      <MuiButton
        onClick={onClick}
        sx={{
          color: 'black',
          padding,
          backgroundColor: 'inherit',
          textTransform: 'none',
          borderRadius: '0',
          border: '1px solid #DEDEDE',
          '&:hover': {
            backgroundColor: 'grayBorder'
          }
        }}
      >
        {children}
      </MuiButton>
    );
  }

  return (
    <MuiButton
      onClick={onClick}
      sx={{
        color: 'white',
        padding,
        backgroundColor: 'black',
        textTransform: 'none',
        borderRadius: '0',
        '&:hover': {
          backgroundColor: 'grayBody'
        }
      }}
    >
      {children}
    </MuiButton>
  );
};

Button.defaultProps = {
  variant: 'contained',
  size: 'small',
  onClick: () => {}
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func
};

export default Button;
