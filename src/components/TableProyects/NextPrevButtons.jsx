import { Box, Button } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

const NextPrevButtons = ({ prev, next }) => {
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      mt: '20px',
    }}>
      <Button onClick={prev} sx={{
        mx: '15px',
        color: 'gray',
      }}>
        <UndoIcon />
      </Button>
      <Button onClick={next} sx={{
        mx: '15px',
        color: 'gray',
      }}>
        <RedoIcon />
      </Button>
    </Box>
  );
};

export default NextPrevButtons;
