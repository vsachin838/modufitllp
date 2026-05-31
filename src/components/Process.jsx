import React from 'react';
import { Box, Typography, Container, Grid, Paper, useTheme } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LoopIcon from '@mui/icons-material/Loop';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = [
  {
    step: '01',
    title: 'Consultation',
    subtitle: 'Initial Planning & Assessment',
    description: 'Every project begins with custom alignment. We review architectural plans, confirm space measurements, and establish a clear execution path.',
    icon: <AssignmentIcon sx={{ fontSize: 32 }} />,
  },
  {
    step: '02',
    title: 'Material Updates',
    subtitle: 'Digital Progress Reports',
    description: 'We believe in complete transparency. Our communication keeps you updated weekly on materials dispatch, timelines, and ready milestones.',
    icon: <LoopIcon sx={{ fontSize: 32 }} />,
  },
  {
    step: '03',
    title: 'Installation',
    subtitle: 'Precision On-Site Setup',
    description: 'Our certified installation professionals execute the assembly with rigorous attention to alignment, structural integrity, and clean hardware fitment.',
    icon: <BuildIcon sx={{ fontSize: 32 }} />,
  },
  {
    step: '04',
    title: 'Handover',
    subtitle: 'Quality Check & Finish',
    description: 'We conduct final tolerances inspects, verify drawers/runners glide smoothly, clean the assembly, and hand over your beautifully finished modular interiors.',
    icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
  },
];

export default function Process() {
  const theme = useTheme();

  return (
    <Box 
      id="process"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'background.alternative',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 }, maxWidth: '700px', mx: 'auto' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'secondary.main', 
              fontWeight: 800, 
              letterSpacing: 1.5, 
              textTransform: 'uppercase', 
              fontFamily: 'Outfit',
              mb: 1.5
            }}
          >
            How We Work
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'primary.main', 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2,
              mb: 2.5
            }}
          >
            Our Step-By-Step Process
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            Every project follows our proven 4-step timeline, ensuring complete transparency, premium finishing, and timely delivery at every stage.
          </Typography>
        </Box>

        {/* Steps Grid */}
        <Grid container spacing={4} sx={{ position: 'relative' }}>
          {/* Connector Line (Desktop only) */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: '110px',
              left: '12.5%',
              right: '12.5%',
              height: '3px',
              borderTop: '3px dashed rgba(194, 159, 93, 0.4)',
              zIndex: 0,
            }}
          />

          {steps.map((step, idx) => (
            <Grid item xs={12} md={3} key={idx} sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                
                {/* Step Circle */}
                <Paper
                  elevation={4}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    border: '4px solid #FFFFFF',
                    position: 'relative',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                      transform: 'scale(1.1)',
                      boxShadow: '0 8px 24px rgba(194, 159, 93, 0.4)',
                    }
                  }}
                >
                  {step.icon}
                  {/* Step Number Badge */}
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      backgroundColor: 'secondary.main',
                      color: 'primary.contrastText',
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #FFFFFF',
                      fontFamily: 'Outfit',
                    }}
                  >
                    {step.step}
                  </Box>
                </Paper>

                {/* Content Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    width: '100%',
                    minHeight: '240px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
                      borderColor: 'rgba(194, 159, 93, 0.3)',
                    }
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 0.5, fontWeight: 700, color: 'primary.main' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 2, color: 'secondary.main', fontWeight: 600 }}>
                    {step.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.92rem' }}>
                    {step.description}
                  </Typography>
                </Paper>

              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
