import { Box, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import NavBarActions from './NavBarActions';
import NavBarHome from './NavBarHome';

const Header = () => {
  const location = useLocation();

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
          {location.pathname === '/'
            ? <NavBarHome />
            : <NavBarActions location={location} />
          }
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
