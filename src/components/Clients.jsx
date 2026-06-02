import React from 'react';
import { Box, Typography, Container, Grid, Paper, Divider, useTheme } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarIcon from '@mui/icons-material/Star';

const clients = [
  {
    name: 'Godrej Interio',
    description: 'Godrej Interio is one of India\'s leading furniture brands, and we\'re proud to be their trusted installation partner for modular solutions across multiple cities.',
    badge: 'Trusted City Partner',
  },
  {
    name: 'Spacewood',
    description: 'A pioneer in ready-to-assemble furniture, Spacewood trusts ModuFit for seamless installations that match their strict quality standards and customer expectations.',
    badge: 'Official Installer',
  },
  {
    name: 'Deogracia',
    description: 'Deogracia partners with us for their premium modular kitchen installations, ensuring their customers receive flawless execution and timely project completion.',
    badge: 'Premium Kitchen Partner',
  },
  {
    name: 'Sleek Kitchens by Asian Paints',
    description: 'We collaborate with Sleek Kitchens by Asian Paints for the installation of modular kitchens and wardrobes, delivering exceptional workmanship, flawless execution, and on-time completion. Our expertise ensures that every project reflects the quality, functionality, and design excellence that Sleek customers expect.',
    badge: 'Premium Installation Partner',
  },
];

export default function Clients() {
  const theme = useTheme();

  return (
    <Box 
      id="clients"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'background.alternative',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 }, maxWidth: '700px', mx: 'auto' }}>
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
            Our Partners
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
            Trusted by India's Leading Manufacturers
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            We work in close collaboration with the country's premium modular brands to ensure a seamless experience from factory production to final on-site handover.
          </Typography>
        </Box>

        {/* Clients Grid */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', width: '100%' }}>
          {clients.map((client, idx) => (
            <Paper
              key={idx}
              elevation={0}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(50% - 16px)' },
                p: { xs: 4, sm: 5 },
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.07)',
                  borderColor: 'primary.light',
                  '& .partner-logo': {
                    backgroundColor: 'primary.main',
                    color: '#FFFFFF',
                  }
                }
              }}
            >
              {/* Badge */}
              <Box 
                sx={{ 
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  px: 1.8,
                  py: 0.6,
                  borderRadius: '30px',
                  backgroundColor: 'rgba(35, 51, 109, 0.05)',
                  color: 'primary.main',
                  mb: 3.5,
                }}
              >
                <StarIcon sx={{ fontSize: 14, color: 'secondary.main' }} />
                <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.72rem', letterSpacing: 0.5 }}>
                  {client.badge}
                </Typography>
              </Box>

              {/* Title */}
              <Typography 
                variant="h4" 
                sx={{ 
                  fontFamily: 'Outfit', 
                  fontWeight: 800, 
                  color: 'primary.main', 
                  mb: 2,
                  fontSize: '1.75rem'
                }}
              >
                {client.name}
              </Typography>

              <Divider sx={{ mb: 3, width: '40px', borderWidth: '1.5px', borderColor: 'secondary.main', borderRadius: '2px' }} />

              {/* Description */}
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '0.98rem', lineHeight: 1.65, mb: 'auto' }}>
                {client.description}
              </Typography>

              {/* Icon Decorator */}
              <Box 
                className="partner-logo"
                sx={{ 
                  mt: 4,
                  alignSelf: 'flex-end',
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: 'background.alternative',
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <HandshakeIcon sx={{ fontSize: 24 }} />
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
