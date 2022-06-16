import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{
      background: '#fff',
      height: '100px',
    }}>
      <Box sx={{
        height: '50px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1.5px solid #ececec',
      }}>
        <Container maxWidth="lg">
          Esto Es
        </Container>
      </Box>
      <Box sx={{
        height: '48.5px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #dddddd',
      }}>
        <Container maxWidth="lg" sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <Typography sx={{
            fontWeight: 600,
            fontSize: '18px',
            width: '100%',
          }}>
            <Link to="/" style={{ color: '#262626' }}>
              My Proyects
            </Link>
          </Typography>
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            <Link to="/create" style={{ color: '#fff' }}>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  background: '#f5222d',
                  height: '35px',
                  fontSize: '12px',
                  fontWeight: 400,
                }}>
                + Add proyect
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
