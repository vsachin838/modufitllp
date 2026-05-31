import React from 'react';
import { Box, Typography, Button, Container, Grid, Stack, useTheme } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import modularKitchen from '../assets/modular_kitchen.png';

export default function Hero() {
  const theme = useTheme();

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      id="home"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: 'calc(100vh - 80px)' },
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 10% 20%, rgba(35, 51, 109, 0.03) 0%, rgba(250, 250, 250, 1) 90%)',
        pt: { xs: 8, md: 4 },
        pb: { xs: 10, md: 6 },
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194, 159, 93, 0.08) 0%, transparent 70%)',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(35, 51, 109, 0.05) 0%, transparent 70%)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Text Side */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'left' }}>
              <Box 
                sx={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  backgroundColor: 'rgba(194, 159, 93, 0.15)', 
                  border: '1px solid rgba(194, 159, 93, 0.3)',
                  color: 'secondary.dark',
                  px: 2, 
                  py: 0.8, 
                  borderRadius: '20px',
                  mb: 3,
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: 'Outfit' }}>
                  Pan-India Installation Service
                </Typography>
              </Box>

              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  color: 'primary.main',
                  lineHeight: 1.1,
                  mb: 3,
                  letterSpacing: '-1px'
                }}
              >
                India's First Organized <br />
                <Box component="span" sx={{ color: 'secondary.main', position: 'relative' }}>
                  Modular Installation
                </Box> Service
              </Typography>

              <Typography 
                variant="h5" 
                color="text.secondary" 
                sx={{ 
                  fontWeight: 400, 
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  lineHeight: 1.5,
                  mb: 4,
                  maxWidth: '540px'
                }}
              >
                Bringing structure, professionalism, and transparency to modular installation services across India.
              </Typography>

              {/* Bullet Points */}
              <Stack spacing={2} sx={{ mb: 4.5 }}>
                {[
                  'From consultation to handover, we deliver seamless installations',
                  'Dedicated project support with detailed weekly updates',
                  'Trusted by India\'s leading brands for quality and on-time handover'
                ].map((text, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <CheckCircleOutlinedIcon sx={{ color: 'secondary.main', mt: 0.3, fontSize: 22 }} />
                    <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* CTAs */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleScrollToContact}
                  endIcon={<ArrowDownwardIcon />}
                  sx={{ 
                    px: 4, 
                    py: 1.8, 
                    fontSize: '1rem',
                    boxShadow: '0 4px 20px rgba(35, 51, 109, 0.25)',
                    '&:hover': {
                      boxShadow: '0 6px 24px rgba(35, 51, 109, 0.35)',
                    }
                  }}
                >
                  Book Installation
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  startIcon={<GetAppIcon />}
                  component="a"
                  href={`${import.meta.env.BASE_URL}ModuFit_Modular_Installation_Brochure.pdf`}
                  download="ModuFit_Modular_Installation_Brochure.pdf"
                  target="_blank"
                  sx={{ 
                    px: 4, 
                    py: 1.8, 
                    fontSize: '1rem',
                    borderWidth: '2px',
                    borderColor: 'secondary.main',
                    color: 'secondary.dark',
                    '&:hover': {
                      borderWidth: '2px',
                      backgroundColor: 'rgba(194, 159, 93, 0.05)',
                    }
                  }}
                >
                  Download Brochure
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Image Side */}
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                position: 'relative', 
                display: 'flex',
                justifyContent: 'center',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  right: '-15px',
                  bottom: '-15px',
                  border: `3px solid ${theme.palette.secondary.main}`,
                  borderRadius: '24px',
                  zIndex: 0,
                  display: { xs: 'none', sm: 'block' },
                }
              }}
            >
              <Box 
                component="img"
                src={modularKitchen}
                alt="ModuFit Premium Kitchen Installation"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '520px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
