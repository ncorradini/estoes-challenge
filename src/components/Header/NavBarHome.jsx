import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBarHome = () => {
  return (
    <>
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
              '&:hover': {
                background: '#d41c25',
              },
            }}>
            + Add proyect
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default NavBarHome;
