import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
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
              About Us
            </Typography>
            <Typography variant="h5">
              Your trusted partner in global education consulting
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At Becks Educational Consultancy, we are dedicated to helping students achieve their dreams of studying abroad. Our mission is to provide expert guidance and support throughout the entire process, from choosing the right institution to successfully completing the application process.
              </Typography>
              <Typography variant="body1" paragraph>
                We believe that education is a transformative journey, and we are committed to making this journey as smooth and successful as possible for every student we work with.
              </Typography>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph>
                We envision a world where every student has access to quality education and the opportunity to study at their dream institution. Through our comprehensive services and personalized approach, we strive to make this vision a reality for students worldwide.
              </Typography>
              <Typography variant="body1">
                Our commitment to excellence and student success has made us a trusted name in educational consulting.
              </Typography>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ bgcolor: 'grey.100', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
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
                    <CardMedia
                      component="img"
                      height="300"
                      image={member.image}
                      alt={member.name}
                    />
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {member.position}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 