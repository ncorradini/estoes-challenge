import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { viewAlert } from '../../services/viewAlert';
import { addProjectList, updateProjectList } from '../../store/slices/projects';
import SelectInput from './Inputs/SelectInput';
import TextInput from './Inputs/TextInput';
// options selects
import { opAssigned } from './options/opAssigned';
import { opProjectManager } from './options/opProjectManager';
import { opStatus } from './options/opStatus';

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const position = location.state?.id;
  const { list } = useSelector(state => state.projects);

  const date = new Date();
  const creation = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  const initialState = {
    id: location.state?.id || `${list.length}`,
    creationDate: list[position]?.creationDate || creation,
    projectName: list[position]?.projectName || '',
    description: list[position]?.description || '',
    projectManager: list[position]?.projectManager || 'default',
    assigned: list[position]?.assigned || 'default',
    status: list[position]?.status || 'default',
  };

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState(initialState);

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
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

  return (
    <Box sx={{
      width: '600px',
      background: '#fff',
      mt: '40px',
    }}>
      <form
        onSubmit={handleSubmit}
        style={{ padding: '20px 40px' }}
      >
        <TextInput
          name="projectName"
          title="Project name"
          value={inputs.projectName}
          inputs={inputs}
          handleChange={handleChange}
        />
        <TextInput
          name="description"
          title="Description"
          value={inputs.description}
          inputs={inputs}
          handleChange={handleChange}
        />
        <SelectInput
          title="Project manager"
          name="projectManager"
          value={inputs.projectManager}
          handleChange={handleChange}
          options={opProjectManager}
        />
        <SelectInput
          title="Assigned to"
          name="assigned"
          value={inputs.assigned}
          handleChange={handleChange}
          options={opAssigned}
        />
        <SelectInput
          title="Status"
          name="status"
          value={inputs.status}
          handleChange={handleChange}
          options={opStatus}
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          sx={{
            mt: '30px',
            background: '#f5222d',
            height: '35px',
            fontSize: '12px',
            fontWeight: 400,
            '&:hover': {
              background: '#d41c25',
            },
          }}
        >
          {location.state ? 'Save changes' : 'Create proyect'}
        </Button>
      </form>
    </Box>
  );
};

export default Form;
