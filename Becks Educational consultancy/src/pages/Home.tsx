import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Snackbar,
  Alert,
  TextField
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Testimonials from '../components/Testimonials';
import CountryServices from '../components/CountryServices';
import { motion } from 'framer-motion';
//import SchoolIcon from '@mui/icons-material/School';
//import LanguageIcon from '@mui/icons-material/Language';
//import WorkIcon from '@mui/icons-material/Work';
//import PhoneIcon from '@mui/icons-material/Phone';
//import { useInView } from 'react-intersection-observer';
//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';

const MotionBox = motion(Box);

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSnackbar({
      open: true,
      message: 'Thank you for your message. We will get back to you soon!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setOpenDialog(false);
  };

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

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
            onClick={handleOpenDialog}
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
            onClick={handleOpenDialog}
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
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <DialogTitle sx={{ p: 3, pb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ color: '#1a237e', fontWeight: 600 }}>
              Contact Us
            </Typography>
            <IconButton
              onClick={handleCloseDialog}
              sx={{
                color: '#1a237e',
                '&:hover': {
                  backgroundColor: 'rgba(26, 35, 126, 0.1)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 3, pt: 0 }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gap: 3 }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'rgba(26, 35, 126, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1a237e',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(26, 35, 126, 0.7)',
                      '&.Mui-focused': {
                        color: '#1a237e',
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'rgba(26, 35, 126, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1a237e',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(26, 35, 126, 0.7)',
                      '&.Mui-focused': {
                        color: '#1a237e',
                      },
                    },
                  }}
                />
              </Box>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: 'rgba(26, 35, 126, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1a237e',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1a237e',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(26, 35, 126, 0.7)',
                    '&.Mui-focused': {
                      color: '#1a237e',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={4}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: 'rgba(26, 35, 126, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1a237e',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1a237e',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(26, 35, 126, 0.7)',
                    '&.Mui-focused': {
                      color: '#1a237e',
                    },
                  },
                }}
              />
            </Box>
          </form>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button
            onClick={handleCloseDialog}
            sx={{
              color: '#1a237e',
              '&:hover': {
                backgroundColor: 'rgba(26, 35, 126, 0.1)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            startIcon={<SendIcon />}
            sx={{
              backgroundColor: '#1a237e',
              color: '#ffffff',
              borderRadius: 2,
              px: 3,
              '&:hover': {
                backgroundColor: '#0d47a1',
              },
            }}
          >
            Send Message
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{
            width: '100%',
            backgroundColor: snackbar.severity === 'success' ? '#1a237e' : '#d32f2f',
            color: '#ffffff',
            '& .MuiAlert-icon': {
              color: '#ffffff',
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home; 