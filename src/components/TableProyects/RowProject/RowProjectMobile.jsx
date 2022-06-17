import { TableCell, TableRow, Avatar, Box } from '@mui/material';
import ButtonsActions from './ButtonsActions';

const RowProjectMobile = ({ project }) => {
  return (
    <>
      <TableRow
        key={project.id}
        sx={{
          'td, th': { border: 0 },
          display: { md: 'none', xs: 'flex' },
          borderBottom: '0.5px solid gray',
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}>
          <TableCell sx={{ py: 0, my: '10px' }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '18px',
              color: '#595959',
            }}>
              {project.projectName}
              <span style={{
                color: 'gray',
                fontSize: '12px',
              }}>Creation date: {project.creationDate}</span>
            </Box>
          </TableCell>

          <TableCell sx={{ py: 0, mb: '10px' }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#595959',
            }}>
              <Avatar sx={{ width: 25, height: 25, mr: '8px' }} />
              {project.assigned}
            </Box>
          </TableCell>
        </Box>
        <ButtonsActions project={project} />
      </TableRow>
    </>
  );
};

export default RowProjectMobile;
