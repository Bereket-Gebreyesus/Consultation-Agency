import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Rating, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  backgroundColor: '#000000',
  color: '#ffffff',
  border: '1px solid #333',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(255, 255, 255, 0.1)',
  },
}));

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    country: 'United States',
    image: '/images/usa-visa.jpg',
    rating: 5,
    testimonial: 'Thanks to Becks Educational Consultancy, I successfully obtained my student visa for the USA. Their guidance throughout the process was invaluable.',
    university: 'Harvard University',
    program: 'Master of Business Administration',
  },
  {
    id: 2,
    name: 'Michael Chen',
    country: 'Canada',
    image: '/images/canada-visa.jpg',
    rating: 5,
    testimonial: 'The team at Becks made my dream of studying in Canada a reality. Their expertise in visa applications is unmatched.',
    university: 'University of Toronto',
    program: 'Computer Science',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    country: 'United Kingdom',
    image: '/images/uk-visa.jpg',
    rating: 5,
    testimonial: 'I couldn\'t have asked for better support in my UK student visa application. Becks Educational Consultancy is truly professional.',
    university: 'University of Oxford',
    program: 'International Relations',
  },
];

const Testimonials: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#000000' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#ffffff',
            mb: 6,
          }}
        >
          Success Stories
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {testimonials.map((testimonial) => (
            <StyledCard key={testimonial.id}>
              <CardMedia
                component="img"
                height="200"
                image={testimonial.image}
                alt={`${testimonial.name} - ${testimonial.country} Visa`}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#ffffff' }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#cccccc' }} gutterBottom>
                    {testimonial.country}
                  </Typography>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2, color: '#ffffff' }} />
                </Box>
                <Divider sx={{ my: 2, borderColor: '#333' }} />
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                    University
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#cccccc' }}>
                    {testimonial.university}
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                    Program
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#cccccc' }}>
                    {testimonial.program}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, borderColor: '#333' }} />
                <Typography variant="body1" sx={{ color: '#cccccc', fontStyle: 'italic' }}>
                  "{testimonial.testimonial}"
                </Typography>
              </CardContent>
            </StyledCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 