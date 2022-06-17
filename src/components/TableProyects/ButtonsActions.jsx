import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProjectList } from '../../store/slices/projects';
import { TableCell, IconButton, Menu, MenuItem } from '@mui/material';
// Icons
import MoreIcon from '@mui/icons-material/MoreVert';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { viewAlert } from '../../services/viewAlert';

const ButtonsActions = ({ project }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleEdit = e => {
    navigate('/edit', {
      state: { id: e.target.id },
    });
  };

  const handleDelete = async e => {
    handleClose();
    const confirm = await viewAlert('confirm', '¿Seguro deseas borrar el proyecto?');
    if (confirm) dispatch(deleteProjectList(e.target.id));
  };

  return (
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
        <MenuItem
          key="edit"
          id={project.id}
          onClick={handleEdit}
          sx={{ fontSize: '14px', borderBottom: '1.5px solid #dcdcdc' }}
        >
          <ModeEditOutlineOutlinedIcon
            fontSize="small"
            sx={{ mr: '10px' }}
          />
          Edit
        </MenuItem>
        <MenuItem
          key="delete"
          id={project.id}
          onClick={handleDelete}
          sx={{ fontSize: '14px' }}
        >
          <DeleteOutlinedIcon
            fontSize="small"
            sx={{ mr: '10px' }}
          />
          Delete
        </MenuItem>
      </Menu>
    </TableCell>
  );
};

export default ButtonsActions;
