import { TableCell, TableRow, Avatar, Box } from '@mui/material';
import ButtonsActions from './ButtonsActions';

const RowProject = ({ project }) => {
  return (
    <TableRow
      key={project.id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        display: { md: 'table-row', xs: 'none' },
      }}
    >
      <TableCell component="th" scope="row">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '15px',
            color: '#595959',
          }}>
          {project.projectName}
          <span style={{
            color: 'gray',
            fontSize: '12px',
          }}>Creation date: {project.creationDate}</span>
        </Box>
      </TableCell>

      <TableCell align="left">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#595959',
          }}>
          <Avatar sx={{
            width: 25,
            height: 25,
            mr: '8px',
            background: '#ffe0b2',
            color: '#d15d19',
            fontSize: '10px',
          }}>WC</Avatar>
          {project.projectManager}
        </Box>
      </TableCell>

      <TableCell align="left">
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          color: '#595959',
        }}>
          <Avatar sx={{ width: 25, height: 25, mr: '8px' }} />
          {project.assigned}
        </Box>
      </TableCell>

      <TableCell align="left">
        <span style={{
          background: '#f5f5f5',
          padding: '5px 8px',
          border: '1.5px solid #dcdcdc',
          borderRadius: '5px',
          color: '#565555',
        }}>
          {project.status}
        </span>
      </TableCell>

      <ButtonsActions project={project} />
    </TableRow>
  );
};

export default RowProject;
