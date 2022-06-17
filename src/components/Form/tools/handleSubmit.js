import { addProjectList, updateProjectList } from '../../../store/slices/projects';
import { viewAlert } from '../../../services/viewAlert';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const dispatch = useDispatch();

export const handleSubmit = (e, inputs) => {
  e.preventDefault();

  if (inputs.projectName === '' ||
    inputs.description === '' ||
    inputs.projectManager === 'default' ||
    inputs.assigned === 'default' ||
    inputs.status === 'default') return alert('Campos incompletos');

  if (location.state) {
    dispatch(updateProjectList(inputs));
    viewAlert('success', 'Proyecto editado correctamente!');
    navigate('/');
  } else {
    dispatch(addProjectList(inputs));
    viewAlert('success', 'Proyecto creado correctamente!');
    navigate('/');
  }
};
