import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const NextPrevButtons = ({ prev, next, list, actuallyPage }) => {
  const [pages, setPages] = useState(0);

  useEffect(() => {
    setPages(Math.ceil(list.length / 3));
  }, [list]);

  return (
    <Box sx={{
      mt: '30px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Button onClick={prev} sx={{
        mx: '5px',
        color: 'gray',
      }}>
        <NavigateBeforeIcon />
      </Button>
      <Typography sx={{
        fontSize: '12px',
        color: 'gray',
      }}>
        Page {actuallyPage} of {pages}
      </Typography>
      <Button onClick={next} sx={{
        mx: '5px',
        color: 'gray',
      }}>
        <NavigateNextIcon />
      </Button>
    </Box>
  );
};

export default NextPrevButtons;
