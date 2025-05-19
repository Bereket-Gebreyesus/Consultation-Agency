import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MotionBox = motion(Box);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSnackbar({
      open: true,
      message: 'Thank you for your message. We will get back to you soon!',
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: '#ffffff' }} />,
      title: 'Email',
      content: 'info@becksconsultancy.com',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: '#ffffff' }} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: '#ffffff' }} />,
      title: 'Address',
      content: '123 Education Street, City, Country',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          py: { xs: 6, md: 8 },
          borderBottom: '1px solid #333',
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Contact Us
            </Typography>
            <Typography variant="h5" sx={{ color: '#cccccc' }}>
              Get in touch with our team of experts
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 4 }}>
          {/* Contact Form */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#ffffff', fontWeight: 600, mb: 4 }}>
                  Send us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: '#333',
                            },
                            '&:hover fieldset': {
                              borderColor: '#ffffff',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#ffffff',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#cccccc',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#ffffff',
                          },
                        }}
                      />
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: '#333',
                            },
                            '&:hover fieldset': {
                              borderColor: '#ffffff',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#ffffff',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#cccccc',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#ffffff',
                          },
                        }}
                      />
                    </Box>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#ffffff',
                          '& fieldset': {
                            borderColor: '#333',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffffff',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#ffffff',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#cccccc',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#ffffff',
                        },
                      }}
                    />
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#ffffff',
                          '& fieldset': {
                            borderColor: '#333',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffffff',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#ffffff',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#cccccc',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#ffffff',
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: '#1a237e',
                        color: '#ffffff',
                        py: 1.5,
                        '&:hover': {
                          backgroundColor: '#0d47a1',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </MotionBox>

          {/* Contact Information */}
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333', height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#ffffff', fontWeight: 600, mb: 4 }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                      }}
                    >
                      <Box sx={{ color: '#ffffff' }}>
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 600, mb: 1 }}>
                          {info.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#cccccc' }}>
                          {info.content}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </MotionBox>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%', backgroundColor: '#1a1a1a', color: '#ffffff' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 