import React from 'react';
import { Fab, Tooltip, Zoom, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppButton() {
  const theme = useTheme();
  
  const whatsappUrl = "https://wa.me/917827658674?text=Hi%20ModuFit%20LLP,%20I%20would%20like%20to%20enquire%20about%20your%20modular%20installation%20services.";

  return (
    <Tooltip title="Chat on WhatsApp" placement="left" arrow>
      <Zoom in={true} style={{ transitionDelay: '500ms' }}>
        <Fab
          color="success"
          aria-label="whatsapp"
          component="a"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: 'fixed',
            bottom: { xs: 20, md: 30 },
            right: { xs: 20, md: 30 },
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            zIndex: theme.zIndex.speedDial,
            boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#128C7E',
              transform: 'scale(1.1) rotate(10deg)',
              boxShadow: '0 6px 20px rgba(18, 140, 126, 0.5)',
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </Fab>
      </Zoom>
    </Tooltip>
  );
}
