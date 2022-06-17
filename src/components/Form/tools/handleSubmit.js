import { addProjectList, updateProjectList } from '../../../store/slices/projects';
import { viewAlert } from '../../../services/viewAlert';

export const handleSubmit = (e, inputs, navigate, dispatch, location) => {
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
