import { Box, Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';

const MotionBox = motion(Box);

const stats = [
  {
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    number: '1000+',
    label: 'Students Placed',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
    number: '95%',
    label: 'Success Rate',
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    number: '50+',
    label: 'Partner Universities',
  },
  {
    icon: <PublicIcon sx={{ fontSize: 40 }} />,
    number: '15+',
    label: 'Countries',
  },
];

const team = [
  {
    name: 'Sarah Johnson',
    position: 'Founder & CEO',
    image: '/images/pexels-divinetechygirl-1181686.jpg',
    bio: 'With over 15 years of experience in international education, Dr. Johnson leads our team with expertise.',
  },
  {
    name: 'Michael Chen',
    position: 'Head of Admissions',
    image: '/images/default-profile.jpg',
    bio: 'Specializing in university admissions, Michael has helped hundreds of students secure spots at top institutions.',
  },
  {
    name: 'Patel',
    position: 'Student Success Manager',
    image: '/images/pexels-justin-shaifer-501272-1222271.jpg',
    bio: 'Dedicated to ensuring student success, Aisha provides comprehensive support throughout the application process.',
  },
];

const galleryImages = [
  {
    image: '/images/pexels-10ar-2880979.jpg',
    title: 'Student Success Stories',
    description: 'Our students achieving their dreams at top universities worldwide',
  },
  {
    image: '/images/pexels-pixabay-221537.jpg',
    title: 'Modern Office',
    description: 'State-of-the-art facilities for personalized counseling',
  },
  {
    image: '/images/pexels-field-engineer-147254-442150.jpg',
    title: 'Workshop Sessions',
    description: 'Regular workshops and seminars for student development',
  },
  {
    image: '/images/pexels-rdne-7713351.jpg',
    title: 'Graduation Celebrations',
    description: 'Celebrating our students\' achievements and milestones',
  },
];

const About = () => {
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
    <Box sx={{ backgroundColor: '#0a1929', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(10, 25, 41, 0.9), rgba(10, 25, 41, 0.9)), url("/images/about-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to bottom, transparent, #0a1929)',
          },
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center', color: '#ffffff' }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2,
              }}
            >
              About Becks
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Empowering students to achieve their global educational dreams
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4,
          }}
        >
          {stats.map((stat, index) => (
            <MotionBox key={index} variants={itemVariants}>
              <Card
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box
                    sx={{
                      color: '#1a237e',
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#1a237e',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#333333' }}>
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>

      {/* Mission & Vision Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <Container maxWidth="lg">
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
            <MotionBox variants={itemVariants}>
              <Card
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#1a237e',
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.8 }}>
                    To empower students with the knowledge, resources, and support they need to pursue their educational
                    dreams globally. We believe in creating opportunities for academic excellence and personal growth
                    through international education.
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>

            <MotionBox variants={itemVariants}>
              <Card
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#1a237e',
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.8 }}>
                    To be the leading educational consultancy that transforms lives through quality education and
                    international opportunities. We envision a world where every student has access to the best
                    educational resources and guidance.
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center', mb: 6 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#ffffff',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Our Success Stories
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Take a glimpse into the journey of our students and our facilities
            </Typography>
          </MotionBox>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {galleryImages.map((item, index) => (
              <MotionBox key={index} variants={itemVariants}>
                <Card
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '& .MuiCardMedia-root': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="400"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        p: 3,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#ffffff',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#ffffff',
              fontWeight: 700,
              mb: 2,
            }}
          >
            Our Leadership Team
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Meet the experts dedicated to your success
          </Typography>
        </MotionBox>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {team.map((member, index) => (
            <MotionBox key={index} variants={itemVariants}>
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
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#1a237e',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#1a237e',
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    {member.position}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.8 }}>
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
};

export default About; 