import { Box, Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'Founder & CEO',
      image: 'https://via.placeholder.com/300',
      description: 'With over 15 years of experience in educational consulting.',
    },
    {
      name: 'Jane Smith',
      position: 'Head of Admissions',
      image: 'https://via.placeholder.com/300',
      description: 'Specialized in university admissions and student counseling.',
    },
    {
      name: 'Mike Johnson',
      position: 'International Relations',
      image: 'https://via.placeholder.com/300',
      description: 'Expert in international education systems and partnerships.',
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
              About Us
            </Typography>
            <Typography variant="h5" sx={{ color: '#cccccc' }}>
              Your trusted partner in global education consulting
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333', height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h3" gutterBottom sx={{ color: '#ffffff', fontWeight: 600, mb: 3 }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#cccccc' }}>
                  At Becks Educational Consultancy, we are dedicated to helping students achieve their dreams of studying abroad. Our mission is to provide expert guidance and support throughout the entire process, from choosing the right institution to successfully completing the application process.
                </Typography>
                <Typography variant="body1" sx={{ color: '#cccccc' }}>
                  We believe that education is a transformative journey, and we are committed to making this journey as smooth and successful as possible for every student we work with.
                </Typography>
              </CardContent>
            </Card>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333', height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h3" gutterBottom sx={{ color: '#ffffff', fontWeight: 600, mb: 3 }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#cccccc' }}>
                  We envision a world where every student has access to quality education and the opportunity to study at their dream institution. Through our comprehensive services and personalized approach, we strive to make this vision a reality for students worldwide.
                </Typography>
                <Typography variant="body1" sx={{ color: '#cccccc' }}>
                  Our commitment to excellence and student success has made us a trusted name in educational consulting.
                </Typography>
              </CardContent>
            </Card>
          </MotionBox>
        </Box>
      </Container>

      {/* Team Section */}
      <Box sx={{ backgroundColor: '#1a1a1a', py: { xs: 6, md: 8 }, borderTop: '1px solid #333' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom sx={{ color: '#ffffff', fontWeight: 600, mb: 6 }}>
            Our Team
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {teamMembers.map((member, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#000000',
                    border: '1px solid #333',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 16px rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={member.image}
                    alt={member.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#ffffff', fontWeight: 600 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#1a237e', mb: 2, fontWeight: 500 }}>
                      {member.position}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#cccccc' }}>
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 