import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import NotProject from './NotProject';
import RowProject from './RowProject/RowProject';
import RowProjectMobile from './RowProject/RowProjectMobile';
import Searcher from '../Searcher';

const TableProyects = () => {
  const { list, termSearch } = useSelector(state => state.projects);

  useEffect(() => {}, [list]);

  const searchingTerm = () => {
    return function (x) {
      return x.projectName.includes(termSearch) || !termSearch;
    };
  };

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      mb: '150px',
    }}>
      <Searcher />
      <Table sx={{
        mx: 0,
        px: 0,
        mt: '40px',
        boxShadow: '0px 3px 5px 0px rgba(148,148,148,0.4)',
      }}>
        <TableHead sx={{
          background: '#fafafa',
          display: { md: 'table-header-group', xs: 'none' },
        }}>
          <TableRow>
            <TableCell>Project info</TableCell>
            <TableCell align="left">Project Manager</TableCell>
            <TableCell align="left">Assigned to</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ background: '#fff' }}>
          {list.filter(searchingTerm()).map(project => <RowProject key={project.id} project={project} />)}
          {list.filter(searchingTerm()).map(project => <RowProjectMobile key={project.id} project={project} />)}
        </TableBody>
      </Table>

      {list.length <= 0 && <NotProject />}
    </Box>
  );
};

export default TableProyects;
