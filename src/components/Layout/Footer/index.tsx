import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Twitter, Instagram, YouTube } from '@mui/icons-material';
import Line from './line.png';

const Footer: React.FC = () => {
  return (
    <Box bgcolor="white" paddingTop="25px">
      <Container>
        <Box
          width="162px"
          margin="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Twitter />
          </Box>
          <Box width="45px" />
          <Box>
            <Instagram />
          </Box>
          <Box width="45px" />
          <Box>
            <YouTube />
          </Box>
        </Box>

        <Box marginY="15px" textAlign="center">
          <img src={Line} alt="Line" />
        </Box>

        <Box width="184px" margin="auto" textAlign="center">
          <Typography color="grayBody" marginBottom="5px">
            support@openui.design
          </Typography>
          <Typography color="grayBody" marginBottom="5px">
            +60 825 876
          </Typography>
          <Typography color="grayBody" marginBottom="5px">
            08:00 - 22:00 - Everyday
          </Typography>
        </Box>

        <Box marginY="15px" textAlign="center">
          <img src={Line} alt="Line" />
        </Box>

        <Box
          width="375px"
          margin="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Typography color="title">About</Typography>
          </Box>
          <Box width="52px"/>
          <Box>
            <Typography color="title">Contact</Typography>
          </Box>
          <Box width="52px"/>
          <Box>
            <Typography color="title">Blog</Typography>
          </Box>
        </Box>
      </Container>
      <Box
        bgcolor="#f9f9f9"
        paddingY="16px"
        textAlign="center"
        marginTop="15px"
      >
        <Typography color="grayLabel" fontSize="12px">
          Copyright© OpenUI All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
