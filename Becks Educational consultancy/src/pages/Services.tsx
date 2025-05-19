import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
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
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
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
      icon: <LanguageIcon sx={{ fontSize: 40 }} />,
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
      icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
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
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
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
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Our Services
            </Typography>
            <Typography variant="h5">
              Comprehensive support for your educational journey
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {service.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Typography
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          key={featureIndex}
                          sx={{ mb: 1 }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="body1" paragraph>
            Contact us today to learn more about our services and how we can help you achieve your educational goals.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 