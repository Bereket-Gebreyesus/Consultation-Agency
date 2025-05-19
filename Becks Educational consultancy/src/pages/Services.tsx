import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const Services = () => {
  const services = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'University Selection',
      description: 'Expert guidance in choosing the right university based on your academic profile, career goals, and personal preferences.',
      features: [
        'Comprehensive university research',
        'Program matching',
        'Location and culture assessment',
        'Cost and scholarship analysis',
      ],
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'Test Preparation',
      description: 'Professional coaching for standardized tests required for international education.',
      features: [
        'IELTS/TOEFL preparation',
        'SAT/ACT coaching',
        'GRE/GMAT training',
        'Practice tests and materials',
      ],
    },
    {
      icon: <DescriptionIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'Application Support',
      description: 'Complete assistance with the application process to ensure your best chance of acceptance.',
      features: [
        'Document preparation',
        'Essay review and editing',
        'Application form assistance',
        'Deadline management',
      ],
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'Visa Guidance',
      description: 'Expert support throughout the visa application process to ensure a smooth transition.',
      features: [
        'Visa documentation',
        'Interview preparation',
        'Financial planning',
        'Pre-departure briefing',
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#0a1929', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(45deg, #0a1929 0%, #1a237e 100%)',
          color: '#ffffff',
          py: { xs: 6, md: 8 },
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Our Services
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Comprehensive support for your educational journey
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
          {services.map((service, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#eeeeee',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 16px rgba(26, 35, 126, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 3 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1a237e', fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: '#333333', mb: 3 }}>
                    {service.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {service.features.map((feature, featureIndex) => (
                      <Typography
                        component="li"
                        variant="body2"
                        key={featureIndex}
                        sx={{ 
                          mb: 1.5,
                          color: '#555555',
                          '&::marker': {
                            color: '#1a237e',
                          },
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </Box>

        {/* CTA Section */}
        <Box 
          sx={{ 
            mt: 8, 
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            p: 6,
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: '#ffffff', fontWeight: 600 }}>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'rgba(209, 209, 209, 0.8)', mb: 4 }}>
            Contact us today to learn more about our services and how we can help you achieve your educational goals.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#1a237e',
              color: '#ffffff',
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#0d47a1',
              },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 