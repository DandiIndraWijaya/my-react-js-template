/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Button as MuiButton } from '@mui/material';
import PropTypes from 'prop-types';

interface Props {
  variant?: string
  size?: string
  borderRadius?: string
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  children,
  size,
  variant,
  onClick,
  borderRadius
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
          borderRadius,
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
        borderRadius,
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
  onClick: () => {},
  borderRadius: '0'
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  borderRadius: PropTypes.string
};

export default Button;
