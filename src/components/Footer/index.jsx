import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        mt: '60px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        minHeight: '50px',
        color: 'black',
        textAlign: 'center',
        background: '#f9f9f9',
      }}>
      <Container maxWidth="md">
        <Typography sx={{ opacity: 0.5, fontSize: '11px' }}>
          Sitio web diseñado por Nicolás Corradini © 2022
          <br />
          <a href="https://ncorradini.com.ar" target="_blank" rel="noreferrer">
            www.ncorradini.com.ar
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
