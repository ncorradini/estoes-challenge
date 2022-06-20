import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import NotProject from './NotProject';
import RowProject from './RowProject/RowProject';
import RowProjectMobile from './RowProject/RowProjectMobile';
import Searcher from '../Searcher';
import NextPrevButtons from './NextPrevButtons';

const TableProyects = () => {
  const { list, termSearch } = useSelector(state => state.projects);
  const [currentPage, setCurrentPage] = useState(0);
  const [actuallyPage, setActuallyPage] = useState(0);
  const filtered = list.filter(project => project.projectName.includes(termSearch));

  const filteredList = () => {
    if (termSearch.length === 0) {
      return list.slice(currentPage, currentPage + 3);
    }

    return filtered.slice(currentPage, currentPage + 3);
  };

  const next = () => {
    if (filtered.length > currentPage + 3) {
      setCurrentPage(currentPage + 3);
      setActuallyPage(actuallyPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 3);
      setActuallyPage(actuallyPage !== 1 ? actuallyPage - 1 : actuallyPage);
    }
  };

  useEffect(() => {
    setActuallyPage(list.length === 0 ? 0 : 1);
  }, [list]);

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
          {filteredList().map(project => <RowProject key={project.id} project={project} />)}
          {filteredList().map(project => <RowProjectMobile key={project.id} project={project} />)}
        </TableBody>
      </Table>
      {list.length <= 0 && <NotProject />}

      <NextPrevButtons
        prev={prev}
        next={next}
        list={list}
        actuallyPage={actuallyPage}
      />
    </Box>
  );
};

export default TableProyects;
