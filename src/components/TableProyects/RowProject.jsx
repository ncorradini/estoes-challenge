import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MoreIcon from '@mui/icons-material/MoreVert';
import {
  TableCell,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteProjectList } from '../../store/slices/projects';

const RowProject = ({ project }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = e => {
    navigate('/edit', {
      state: { id: e.target.id },
    });
  };

  const handleDelete = e => {
    dispatch(deleteProjectList(e.target.id));
  };

  return (
    <TableRow
      key={project.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {project.projectName}
      </TableCell>
      <TableCell align="left">{project.projectManager}</TableCell>
      <TableCell align="left">{project.assigned}</TableCell>
      <TableCell align="left">{project.status}</TableCell>
      <TableCell align="left">
        <IconButton onClick={handleClick}>
          <MoreIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{ style: { width: '20ch' } }}
        >
          <MenuItem key="edit" id={project.id} onClick={handleEdit}>
            Edit
          </MenuItem>
          <MenuItem key="delete" id={project.id} onClick={handleDelete}>
            Delete
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default RowProject;
