import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RowProject from './RowProject';

const TableProyects = () => {
  const { list } = useSelector(state => state.projects);

  useEffect(() => {}, [list]);

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
    }}>
      <Table sx={{
        mt: '40px',
        boxShadow: '0px 3px 5px 0px rgba(148,148,148,0.4)',
      }}>
        <TableHead sx={{ background: '#fafafa' }}>
          <TableRow>
            <TableCell>Project info</TableCell>
            <TableCell align="left">Project Manager</TableCell>
            <TableCell align="left">Assigned to</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ background: '#fff' }}>
          {list.map(project =>
            <RowProject
              key={project.id}
              project={project}
            />,
          ) }
        </TableBody>
      </Table>

      {list.length <= 0 && <p style={{
        width: '100%',
        textAlign: 'center',
        padding: '50px',
      }}>Aún no hay ningún proyecto cargado</p>}
    </Box>
  );
};

export default TableProyects;
