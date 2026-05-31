import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GetAppIcon from '@mui/icons-material/GetApp';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ArchitectureIcon sx={{ color: 'primary.main', fontSize: 32 }} />
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 0.5 }}>
            ModuFit <Box component="span" sx={{ color: 'secondary.main' }}>LLP</Box>
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ mb: 'auto' }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => handleScroll(item.href)}
              sx={{ 
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(35, 51, 109, 0.08)',
                }
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ 
                  fontWeight: 600, 
                  color: 'primary.main',
                  fontFamily: 'Outfit'
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 4 }}>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          startIcon={<GetAppIcon />}
          component="a"
          href="/ModuFit_Modular_Installation_Brochure.pdf"
          download="ModuFit_Modular_Installation_Brochure.pdf"
          target="_blank"
          sx={{ py: 1.5 }}
        >
          Download Brochure
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          top: 0,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: { xs: 70, md: 80 } }}>
            {/* Logo */}
            <Box 
              component="a" 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#home');
              }}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1.5, 
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: 42, 
                height: 42, 
                borderRadius: '12px', 
                backgroundColor: 'primary.main',
                boxShadow: '0 4px 10px rgba(35, 51, 109, 0.3)'
              }}>
                <ArchitectureIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />
              </Box>
              <Typography 
                variant="h5" 
                noWrap 
                sx={{ 
                  fontWeight: 800, 
                  color: 'primary.main', 
                  fontFamily: 'Outfit',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  letterSpacing: 0.5
                }}
              >
                ModuFit <Box component="span" sx={{ color: 'secondary.main' }}>LLP</Box>
              </Typography>
            </Box>

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleScroll(item.href)}
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      px: 2,
                      fontSize: '0.95rem',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        width: 0,
                        height: 2,
                        backgroundColor: 'secondary.main',
                        transition: 'all 0.3s ease-in-out',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover:after': {
                        width: '60%',
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'secondary.main',
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Desktop CTA & Mobile Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!isMobile && (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<GetAppIcon />}
                  component="a"
                  href="/ModuFit_Modular_Installation_Brochure.pdf"
                  download="ModuFit_Modular_Installation_Brochure.pdf"
                  target="_blank"
                  sx={{ 
                    px: 3.5, 
                    py: 1.2,
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    boxShadow: '0 4px 14px rgba(35, 51, 109, 0.25)',
                    '&:hover': {
                      boxShadow: '0 6px 20px rgba(35, 51, 109, 0.35)',
                    }
                  }}
                >
                  Download Brochure
                </Button>
              )}

              {isMobile && (
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    backgroundColor: 'rgba(35, 51, 109, 0.05)',
                    p: 1.2,
                    borderRadius: '12px'
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        PaperProps={{
          sx: { width: '80%', maxWidth: 360, borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px' }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
