import React from 'react';
import { Box, Typography, Container, Grid, Paper, Stack, useTheme } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ForumIcon from '@mui/icons-material/Forum';

const highlights = [
  {
    title: 'Pan-India Reach',
    description: 'Our extensive network spans across India, bringing professional modular installation services to every corner of the country with consistent quality standards.',
    icon: <PublicIcon sx={{ fontSize: 32, color: 'secondary.main' }} />,
  },
  {
    title: 'Weekly Digital Updates',
    description: 'Stay informed with detailed weekly progress reports. Our transparent communication keeps you updated on material dispatches, timelines, and installation milestones.',
    icon: <SpeedIcon sx={{ fontSize: 32, color: 'secondary.main' }} />,
  },
  {
    title: 'Trained Professionals',
    description: 'We deploy only skilled carpenters and installers trained specifically in modular systems, ensuring flawless execution, leveling, and structural alignment.',
    icon: <VerifiedUserIcon sx={{ fontSize: 32, color: 'secondary.main' }} />,
  },
  {
    title: 'Transparent Communication',
    description: 'No hidden charges or delays. We align on expectations during consultation and follow up with structured project support until handover.',
    icon: <ForumIcon sx={{ fontSize: 32, color: 'secondary.main' }} />,
  },
];

export default function WhyChooseUs() {
  const theme = useTheme();

  return (
    <Box 
      id="why-choose-us"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="stretch">
          {/* Left Block: Promise Highlight */}
          <Grid item xs={12} md={4.5}>
            <Paper 
              elevation={6}
              sx={{
                p: { xs: 5, md: 6 },
                height: '100%',
                borderRadius: '24px',
                backgroundColor: 'primary.main',
                color: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(35, 51, 109, 0.25)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'rgba(194, 159, 93, 0.15)',
                }
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'secondary.main', 
                  fontWeight: 800, 
                  letterSpacing: 1.5, 
                  textTransform: 'uppercase', 
                  fontFamily: 'Outfit',
                  mb: 2.5
                }}
              >
                Our Promise
              </Typography>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontFamily: 'Outfit', 
                  fontSize: { xs: '2.2rem', md: '2.8rem' }, 
                  lineHeight: 1.2, 
                  fontWeight: 800,
                  mb: 3 
                }}
              >
                Transforming Spaces with Complete Confidence
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255,255,255,0.85)', 
                  fontSize: '1.08rem', 
                  lineHeight: 1.7, 
                  mb: 4 
                }}
              >
                From consultation to handover, we deliver seamless modular installations. We focus on bringing structure, professionalism, and transparency to every project we touch across India.
              </Typography>
              <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', pt: 3 }}>
                <Typography variant="h5" sx={{ color: 'secondary.main', fontWeight: 700, mb: 0.5 }}>
                  100%
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Organized installation management
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Right Block: Core Benefits List */}
          <Grid item xs={12} md={7.5}>
            <Box sx={{ pl: { md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  color: 'primary.main', 
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  mb: 5,
                  textAlign: 'left'
                }}
              >
                Why Partners & Homeowners Hire Us
              </Typography>
              
              <Grid container spacing={4}>
                {highlights.map((item, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <Stack spacing={2} sx={{ textAlign: 'left' }}>
                      <Box 
                        sx={{ 
                          width: 56, 
                          height: 56, 
                          borderRadius: '12px', 
                          backgroundColor: 'rgba(194, 159, 93, 0.1)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
