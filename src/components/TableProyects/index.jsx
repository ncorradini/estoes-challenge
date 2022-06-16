import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';

const TableProyects = () => {
  function createData (name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  ];

  return (
    <Table sx={{
      mt: '40px',
      mx: 'auto',
      width: '100%',
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
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="left">{row.calories}</TableCell>
            <TableCell align="left">{row.fat}</TableCell>
            <TableCell align="left">{row.carbs}</TableCell>
            <TableCell align="left">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableProyects;
