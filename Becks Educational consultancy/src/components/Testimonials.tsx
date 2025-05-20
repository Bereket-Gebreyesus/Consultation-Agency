import { Box, Container, Typography, Card, CardContent, CardMedia, Rating, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'Nigeria',
      rating: 5,
      university: 'University of Toronto',
      program: 'Masters in Computer Science',
      image: 'images/pexels-olly-774909.jpg',
      testimonial: 'Becks Educational Consultancy made my dream of studying in Canada a reality. Their guidance throughout the application process was invaluable.',
    },
    {
      id: 2,
      name: 'Chen',
      country: 'China',
      rating: 5,
      university: 'University of British Columbia',
      program: 'Bachelor of Commerce',
      image: 'images/pexels-stefanstefancik-91227.jpg',
      testimonial: 'The team at Becks provided exceptional support with my university applications and visa process. Highly recommended!',
    },
    {
      id: 3,
      name: 'Shamshir',
      country: 'India',
      rating: 5,
      university: 'McGill University',
      program: 'PhD in Engineering',
      image: 'images/default-profile.jpg',
      testimonial: 'Thanks to Becks, I secured admission to my dream university with a full scholarship. Their expertise in educational consulting is unmatched.',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#0a1929', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" gutterBottom sx={{ color: '#ffffff', fontWeight: 600, mb: 6 }}>
          Success Stories
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {testimonials.map((testimonial) => (
            <MotionBox
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 16px rgba(26, 35, 126, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        mr: 2,
                      }}
                      image={testimonial.image}
                      alt={testimonial.name}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ color: '#1a237e', fontWeight: 600 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#555555' }}>
                        {testimonial.country}
                      </Typography>
                      <Rating value={testimonial.rating} readOnly size="small" sx={{ mt: 0.5 }} />
                    </Box>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle1" sx={{ color: '#1a237e', fontWeight: 500, mb: 1 }}>
                    {testimonial.university}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555555', mb: 2 }}>
                    {testimonial.program}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333333', fontStyle: 'italic' }}>
                    "{testimonial.testimonial}"
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 