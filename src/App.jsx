import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography, Container, Grid, Link, Stack, IconButton, Divider } from '@mui/material';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';

// Theme & Components
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';

// Scroll to Top Component
function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: { xs: 90, md: 30 }, right: { xs: 20, md: 100 }, zIndex: 1000 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box component="main">
        {/* Hero Banner */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* 4-Step Process Section */}
        <Process />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Partners/Clients Section */}
        <Clients />

        {/* Contact Us Section */}
        <ContactForm />
      </Box>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          backgroundColor: 'primary.dark', 
          color: '#FFFFFF',
          pt: 8,
          pb: 4,
          borderTop: '3px solid',
          borderColor: 'secondary.main',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={5} sx={{ mb: 6 }}>
            {/* Column 1: Brand details */}
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: 40, 
                  height: 40, 
                  borderRadius: '10px', 
                  backgroundColor: 'secondary.main',
                }}>
                  <ArchitectureIcon sx={{ color: '#FFFFFF', fontSize: 22 }} />
                </Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 850, 
                    fontFamily: 'Outfit',
                    letterSpacing: 0.5
                  }}
                >
                  ModuFit <Box component="span" sx={{ color: 'secondary.main' }}>LLP</Box>
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, maxWidth: '400px', lineHeight: 1.65 }}>
                India's first organized modular installation service. We bring structure, professionalism, and transparency to modular kitchens, wardrobes, and furniture installations across the nation.
              </Typography>
            </Grid>

            {/* Column 2: Navigation Links */}
            <Grid item xs={12} sm={6} md={3.5}>
              <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 700, mb: 2.5, fontFamily: 'Outfit' }}>
                Quick Navigation
              </Typography>
              <Stack spacing={1.5}>
                {[
                  { label: 'Home / Hero', href: '#home' },
                  { label: 'Services We Provide', href: '#services' },
                  { label: 'Our Process Steps', href: '#process' },
                  { label: 'Why Partner With Us', href: '#why-choose-us' },
                  { label: 'Our Trusted Clients', href: '#clients' },
                  { label: 'Contact Support', href: '#contact' },
                ].map((item) => (
                  <Link 
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    sx={{ 
                      color: 'rgba(255,255,255,0.75)', 
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      '&:hover': { color: 'secondary.main' } 
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Column 3: Contact Summary */}
            <Grid item xs={12} sm={6} md={3.5}>
              <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 700, mb: 2.5, fontFamily: 'Outfit' }}>
                Direct Contact
              </Typography>
              <Stack spacing={2} sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem' }}>
                <Typography>
                  <strong>Phone:</strong>{' '}
                  <Link href="tel:+917827658674" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'secondary.main' } }}>
                    +91 78276 58674
                  </Link>
                </Typography>
                <Typography>
                  <strong>Email:</strong>{' '}
                  <Link href="mailto:crm.modufit@gmail.com" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'secondary.main' } }}>
                    crm.modufit@gmail.com
                  </Link>
                </Typography>
                <Typography>
                  <strong>Reach:</strong> PAN-INDIA SERVICE
                </Typography>
                <Typography>
                  <strong>Website:</strong>{' '}
                  <Link href="https://www.modufitllp.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'secondary.main' } }}>
                    www.modufitllp.com
                  </Link>
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4 }} />

          {/* Bottom Copyright */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
              &copy; {new Date().getFullYear()} ModuFit LLP. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
              Designed & Engineered for Premium Installations.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Floating Action Buttons */}
      <WhatsAppButton />
      
      {/* Scroll to Top */}
      <ScrollTop>
        <Fab 
          color="secondary" 
          size="small" 
          aria-label="scroll back to top"
          sx={{ 
            boxShadow: '0 4px 12px rgba(194, 159, 93, 0.3)',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: '#FFFFFF'
            }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

    </ThemeProvider>
  );
}

export default App;
