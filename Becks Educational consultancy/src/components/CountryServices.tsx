import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  backgroundColor: '#000000',
  color: '#ffffff',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const countries = [
  {
    id: 'usa',
    name: 'United States',
    image: '/images/usa-education.jpg',
    description: 'Top universities, diverse programs, and excellent research opportunities.',
    services: [
      'Student Visa (F-1) Application',
      'University Selection & Application',
      'SAT/ACT Preparation',
      'Scholarship Guidance',
    ],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    image: '/images/uk-education.jpg',
    description: 'World-renowned institutions with rich academic heritage.',
    services: [
      'Student Visa (Tier 4) Application',
      'University Selection & Application',
      'IELTS Preparation',
      'Scholarship Guidance',
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    image: '/images/canada-education.jpg',
    description: 'High-quality education with post-study work opportunities.',
    services: [
      'Study Permit Application',
      'University Selection & Application',
      'Language Test Preparation',
      'Scholarship Guidance',
    ],
  },
  {
    id: 'australia',
    name: 'Australia',
    image: '/images/australia-education.jpg',
    description: 'Innovative education system with great lifestyle.',
    services: [
      'Student Visa (Subclass 500) Application',
      'University Selection & Application',
      'Language Test Preparation',
      'Scholarship Guidance',
    ],
  },
];

const CountryServices: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].id);

  const handleCountryChange = (event: any) => {
    setSelectedCountry(event.target.value);
  };

  const selectedCountryData = countries.find(country => country.id === selectedCountry);

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
          Study Destinations
        </Typography>

        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel id="country-select-label" sx={{ color: '#ffffff' }}>Select Country</InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={selectedCountry}
            label="Select Country"
            onChange={handleCountryChange}
            sx={{
              color: '#ffffff',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '.MuiSvgIcon-root': {
                color: '#ffffff',
              },
            }}
          >
            {countries.map((country) => (
              <MenuItem key={country.id} value={country.id} sx={{ color: '#000000' }}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedCountryData && (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="300"
                  image={selectedCountryData.image}
                  alt={selectedCountryData.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#ffffff' }}>
                    {selectedCountryData.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#cccccc' }} paragraph>
                    {selectedCountryData.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, backgroundColor: '#1a1a1a', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#ffffff' }}>
                  Our Services for {selectedCountryData.name}
                </Typography>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {selectedCountryData.services.map((service, index) => (
                    <li key={index} style={{ marginBottom: '1rem' }}>
                      <Typography variant="body1" sx={{ color: '#cccccc' }}>
                        • {service}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default CountryServices; 