import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const NavBarActions = ({ location }) => {
  return (
    <>
      <Link to="/" style={{
        color: '#575757',
        display: 'flex',
        alignItems: 'center',
      }}>
        <ArrowBackOutlinedIcon
          fontSize="small"
          sx={{ color: '#575757', pr: '5px' }}
        />
        <span style={{
          fontSize: '11px',
          fontFamily: 'Roboto',
        }}>Back</span>
      </Link>
      <Typography sx={{
        fontWeight: 600,
        fontSize: '18px',
        ml: '20px',
      }}>
        {location.pathname === '/create' ? 'Add proyect' : 'Edit project'}
      </Typography>
    </>
  );
};

export default NavBarActions;
