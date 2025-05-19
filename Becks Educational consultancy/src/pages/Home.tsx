import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from '@mui/material';
import Testimonials from '../components/Testimonials';
import CountryServices from '../components/CountryServices';

const Home: React.FC = () => {
  const [openContact, setOpenContact] = useState(false);

  const handleOpenContact = () => {
    setOpenContact(true);
  };

  const handleCloseContact = () => {
    setOpenContact(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box sx={{ backgroundColor: '#0a1929' }}>
      {/* Hero Section with Video Background */}
      <Box
        sx={{
          position: 'relative',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          overflow: 'hidden',
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src="/videos/education-background.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(10, 25, 41, 0.9) 0%, rgba(26, 35, 126, 0.9) 100%)',
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '4rem' },
              color: '#ffffff',
            }}
          >
            Your Gateway to Global Education
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            We help students achieve their dreams of studying abroad with expert guidance and support.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleOpenContact}
            sx={{
              backgroundColor: '#1a237e',
              '&:hover': {
                backgroundColor: '#0d47a1',
              },
              px: 4,
              py: 1.5,
            }}
          >
            Get Started
          </Button>
        </Container>

        {/* Floating Contact Button */}
        <Box
          sx={{
            position: 'fixed',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1000,
          }}
        >
          <Button
            variant="contained"
            onClick={handleOpenContact}
            sx={{
              backgroundColor: '#1a237e',
              borderRadius: '50%',
              width: 60,
              height: 60,
              minWidth: 60,
              '&:hover': {
                backgroundColor: '#0d47a1',
              },
            }}
          >
            <Typography variant="h6">📞</Typography>
          </Button>
        </Box>
      </Box>

      {/* Country Services Section */}
      <Box sx={{ backgroundColor: '#0a1929', py: { xs: 6, md: 8 } }}>
        <CountryServices />
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: '#0a1929', py: { xs: 6, md: 8 } }}>
        <Testimonials />
      </Box>

      {/* Contact Dialog */}
      <Dialog
        open={openContact}
        onClose={handleCloseContact}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#0a1929',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <DialogTitle sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: 2 }}>
          Contact Us
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#ffffff',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ffffff',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#ffffff',
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#ffffff',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ffffff',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#ffffff',
                },
              }}
            />
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#ffffff',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ffffff',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#ffffff',
                },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#ffffff',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ffffff',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#ffffff',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: '#1a237e',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#0d47a1',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Home; 