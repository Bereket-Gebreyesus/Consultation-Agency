import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactBar: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a',
        py: 1,
        borderBottom: '1px solid #333',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon sx={{ color: '#ffffff', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: '#ffffff' }}>
                +1 (555) 123-4567
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ color: '#ffffff', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: '#ffffff' }}>
                info@becksconsultancy.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnIcon sx={{ color: '#ffffff', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: '#ffffff' }}>
                123 Education St, City, Country
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              size="small"
              sx={{
                color: '#ffffff',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
              }}
            >
              <WhatsAppIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactBar; 