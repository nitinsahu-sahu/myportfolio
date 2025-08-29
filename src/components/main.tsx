import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';
import { Box, Typography, Link } from "@mui/material";

function Main({ parentToChild }) {
  const { mode } = parentToChild;

  return (
    <Box className="container">
      <Box className="about-section">
        <Box className="image-wrapper">
          <Box
            component="img"
            src={profile}
            alt="Avatar"
            width={{ xs: 20, sm: 25, md: 50 }}
            height={{ xs: 140, sm: 145, md: 150 }}
            boxShadow={3}
            sx={{objectFit:"cover"}}
          />
        </Box>
        <Box className="content">

          <Box display="flex" gap={2}>
            <Link
              href="https://github.com/nitinsahu-sahu"
              target="_blank"
              rel="noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: 'grey.100',
                color: 'text.primary',
                border: "1px solid grey",
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  transform: 'scale(1.1)'
                }
              }}
            >
              <GitHubIcon sx={{ color: "black" }} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/nitin-sahu-b3124919b/"
              target="_blank"
              rel="noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: 'grey.100',
                color: 'text.primary',
                border: "1px solid #0077B5",
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#0077B5', // LinkedIn blue
                  color: 'white',
                  transform: 'scale(1.1)'
                }
              }}
            >
              <LinkedInIcon sx={{ color: "black" }} />
            </Link>
          </Box>
          <Typography variant="h5" fontSize={{ xs: '40px', sm: '60px', md: '80px' }}>Nitin Sahu</Typography>
          <Typography variant="subtitle1" fontSize={{ xs: '20px', sm: '25px', md: '30px' }}>Full Stack Developer</Typography>
         
        </Box>
      </Box>
    </Box>
  );
}

export default Main;