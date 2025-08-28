import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';
import { Box, Typography } from "@mui/material";

function Main({ parentToChild }) {
  const { mode } = parentToChild;

  return (
    <Box className="container">
      <Box className="about-section">
        <Box className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </Box>
        <Box className="content">
          <Box className="social_icons">
            <a href="https://github.com/nitinsahu-sahu" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nitin-sahu-b3124919b/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </Box>
          <Typography variant="h5" fontSize={{ xs: '55px', sm: '60px', md: '80px' }}>Nitin Sahu</Typography>
          <Typography variant="h5" fontSize={{ xs: '20px', sm: '25px', md: '30px' }}>Full Stack Developer</Typography>
          <Box className="mobile_social_icons">
            <a href="https://github.com/nitinsahu-sahu" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nitin-sahu-b3124919b/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;