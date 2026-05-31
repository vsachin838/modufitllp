import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, IconButton, Button, useTheme } from '@mui/material';
import KitchenIcon from '@mui/icons-material/Kitchen';
import TvIcon from '@mui/icons-material/Tv';
import ChairIcon from '@mui/icons-material/Chair';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    title: 'Modular Kitchen',
    quote: 'Cook in style, live in comfort.',
    description: 'Transform your cooking space with premium modular kitchens designed for functionality, smart storage, and elegance.',
    icon: <KitchenIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    color: '#E8EDF2',
  },
  {
    title: 'Wardrobe',
    quote: 'Storage that speaks elegance.',
    description: 'Custom wardrobes that maximize your storage space while adding a sleek, sophisticated visual appeal to your bedroom.',
    icon: <MeetingRoomIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    color: '#FAF7F0',
  },
  {
    title: 'TV Unit',
    quote: 'Entertainment, perfectly framed.',
    description: 'Sleek TV units that blend seamlessly with your living space while keeping cables organized and media devices accessible.',
    icon: <TvIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    color: '#F3F0FA',
  },
  {
    title: 'Modular Furniture',
    quote: 'Furniture that fits your life.',
    description: 'Versatile modular furniture solutions designed to adapt perfectly to your changing needs and modern lifestyle spaces.',
    icon: <ChairIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    color: '#F9F1EB',
  },
];

export default function Services() {
  const theme = useTheme();

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      id="services"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, maxWidth: '700px', mx: 'auto' }}>
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
            Our Services
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
            Professional Installation Services
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            We specialize in end-to-end setups, combining craftsmanship with engineered precision to bring your interior designs to life.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  '&:hover': {
                    '& .icon-box': {
                      backgroundColor: 'primary.main',
                      color: '#FFFFFF',
                      transform: 'rotateY(360deg)',
                    },
                    '& .icon-svg': {
                      color: '#FFFFFF',
                    }
                  }
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Icon Container */}
                  <Box 
                    className="icon-box"
                    sx={{ 
                      width: 70, 
                      height: 70, 
                      borderRadius: '16px', 
                      backgroundColor: service.color, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 3.5,
                      transition: 'all 0.6s ease-in-out',
                    }}
                  >
                    {React.cloneElement(service.icon, { className: 'icon-svg' })}
                  </Box>

                  {/* Title */}
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: 'primary.main' }}>
                    {service.title}
                  </Typography>

                  {/* Quote */}
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      mb: 2, 
                      color: 'secondary.main', 
                      fontStyle: 'italic',
                      fontWeight: 600,
                    }}
                  >
                    "{service.quote}"
                  </Typography>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4, flexGrow: 1 }}>
                    {service.description}
                  </Typography>

                  {/* Action Link */}
                  <Box sx={{ mt: 'auto' }}>
                    <Button 
                      variant="text" 
                      color="primary"
                      onClick={handleScrollToContact}
                      endIcon={<ArrowForwardIcon className="arrow" sx={{ fontSize: 16, transition: 'transform 0.2s' }} />}
                      sx={{ 
                        p: 0, 
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: 'secondary.main',
                          '& .arrow': {
                            transform: 'translateX(5px)',
                          }
                        }
                      }}
                    >
                      Enquire Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
