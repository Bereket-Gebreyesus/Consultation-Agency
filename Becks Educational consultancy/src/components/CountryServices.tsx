import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const countries = [
  {
    id: 'usa',
    name: 'United States',
    image: '/images/usa.png',
    description: 'Top universities, diverse programs, and excellent research opportunities.',
    services: [
      'Student Visa (F-1) Application',
      'University Selection & Application',
      'SAT/ACT Preparation',
      'Scholarship Guidance',
    ],
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    image: '/images/netherlands-flag-png-large.png',
    description: 'World-renowned institutions with rich academic heritage.',
    services: [
      'Student Visa (Tier 4) Application',
      'University Selection & Application',
      'IELTS Preparation',
      'Scholarship Guidance',
    ],
  },
  {
    id: 'Poland',
    name: 'Poland',
    image: '/images/poland-flag-png-large.png',
    description: 'High-quality education with post-study work opportunities.',
    services: [
      'Study Permit Application',
      'University Selection & Application',
      'Language Test Preparation',
      'Scholarship Guidance',
    ],
  },
  {
    id: 'Romania',
    name: 'Romania',
    image: '/images/romania-flag-png-large.png',
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

  const handleCountryChange = (event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value);
  };

  const selectedCountryData = countries.find(country => country.id === selectedCountry);

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#0a1929' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: '#ffffff',
            mb: 6,
          }}
        >
          Study Destinations
        </Typography>

        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel id="country-select-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Select Country
          </InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={selectedCountry}
            label="Select Country"
            onChange={handleCountryChange}
            sx={{
              color: '#ffffff',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.1)',
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
              <MenuItem key={country.id} value={country.id} sx={{ color: '#333333' }}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedCountryData && (
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
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
                <CardMedia
                  component="img"
                  height="300"
                  image={selectedCountryData.image}
                  alt={selectedCountryData.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1a237e', fontWeight: 600 }}>
                    {selectedCountryData.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333333' }} paragraph>
                    {selectedCountryData.description}
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: '#ffffff',
                  p: 4,
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: '#1a237e', fontWeight: 600, mb: 3 }}>
                  Our Services for {selectedCountryData.name}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {selectedCountryData.services.map((service, index) => (
                    <Typography
                      component="li"
                      variant="body1"
                      key={index}
                      sx={{ 
                        mb: 2,
                        color: '#333333',
                        '&::marker': {
                          color: '#1a237e',
                        },
                      }}
                    >
                      {service}
                    </Typography>
                  ))}
                </Box>
              </Card>
            </MotionBox>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CountryServices; 