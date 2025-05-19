import { Box, Container, Typography, Link, IconButton, Stack, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: <FacebookIcon />, label: 'Facebook', href: '#' },
    { icon: <TwitterIcon />, label: 'Twitter', href: '#' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
    { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
  ];

  const quickLinks = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    { icon: <EmailIcon />, text: 'info@becksconsultancy.com' },
    { icon: <PhoneIcon />, text: '+1 (555) 123-4567' },
    { icon: <LocationOnIcon />, text: '123 Education Street, City, Country' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000000',
        color: 'white',
        py: { xs: 4, md: 6 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Main Footer Content */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 8 }}
            divider={<Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />}
          >
            {/* Company Info */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Becks Educational Consultancy
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                Your trusted partner in global education consulting. We help students achieve their dreams of studying abroad with expert guidance and personalized support.
              </Typography>
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    color="inherit"
                    aria-label={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>

            {/* Quick Links */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.text}
                    component={RouterLink}
                    to={link.path}
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* Contact Info */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Contact Us
              </Typography>
              <Stack spacing={2}>
                {contactInfo.map((info, index) => (
                  <Stack key={index} direction="row" spacing={1} alignItems="center">
                    <Box sx={{ color: 'inherit', opacity: 0.8 }}>
                      {info.icon}
                    </Box>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {info.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Stack>

          {/* Bottom Bar */}
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © {new Date().getFullYear()} Becks Educational Consultancy. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link
                component={RouterLink}
                to="/privacy"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  opacity: 0.8,
                  '&:hover': { opacity: 1 },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                component={RouterLink}
                to="/terms"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  opacity: 0.8,
                  '&:hover': { opacity: 1 },
                }}
              >
                Terms of Service
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer; 