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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const MotionBox = motion(Box);

const Contact = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box sx={{ backgroundColor: '#0a1929', minHeight: '100vh', pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              color: '#ffffff',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
            }}
          >
            Have questions about studying abroad? We're here to help you achieve your educational goals.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleOpenDialog}
            startIcon={<SendIcon />}
            sx={{
              backgroundColor: '#1a237e',
              color: '#ffffff',
              borderRadius: 2,
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(26, 35, 126, 0.2)',
              '&:hover': {
                backgroundColor: '#0d47a1',
                boxShadow: '0 6px 16px rgba(26, 35, 126, 0.3)',
              },
            }}
          >
            Contact Us
          </Button>
        </MotionBox>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
          }}
        >
          {/* Contact Form */}
          <MotionBox variants={itemVariants}>
            <Card
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" sx={{ color: '#1a237e', fontWeight: 600, mb: 3 }}>
                  Send us a Message
                </Typography>
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
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<SendIcon />}
                      sx={{
                        backgroundColor: '#1a237e',
                        color: '#ffffff',
                        borderRadius: 2,
                        py: 1.5,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        boxShadow: '0 4px 12px rgba(26, 35, 126, 0.2)',
                        '&:hover': {
                          backgroundColor: '#0d47a1',
                          boxShadow: '0 6px 16px rgba(26, 35, 126, 0.3)',
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
          <MotionBox variants={itemVariants}>
            <Card
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
                <Typography variant="h5" sx={{ color: '#1a237e', fontWeight: 600, mb: 4 }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: 'rgba(26, 35, 126, 0.1)',
                        borderRadius: '50%',
                        p: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <LocationOnIcon sx={{ color: '#1a237e', fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ color: '#1a237e', fontWeight: 600 }}>
                        Our Location
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#333333' }}>
                        Addis Ababa, Ethiopia
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: 'rgba(26, 35, 126, 0.1)',
                        borderRadius: '50%',
                        p: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PhoneIcon sx={{ color: '#1a237e', fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ color: '#1a237e', fontWeight: 600 }}>
                        Phone Number
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#333333' }}>
                        +251 911 123 456
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: 'rgba(26, 35, 126, 0.1)',
                        borderRadius: '50%',
                        p: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <EmailIcon sx={{ color: '#1a237e', fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ color: '#1a237e', fontWeight: 600 }}>
                        Email Address
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#333333' }}>
                        info@becksconsultancy.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: 'rgba(26, 35, 126, 0.1)',
                        borderRadius: '50%',
                        p: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <AccessTimeIcon sx={{ color: '#1a237e', fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ color: '#1a237e', fontWeight: 600 }}>
                        Working Hours
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#333333' }}>
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </MotionBox>
        </MotionBox>
      </Container>

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

export default Contact; 