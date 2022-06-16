import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addProjectList, updateProjectList } from '../../store/slices/projects';
import SelectInput from './Inputs/SelectInput';
import TextInput from './Inputs/TextInput';

const Form = () => {
  const location = useLocation();
  const position = location.state?.id;
  const { list } = useSelector(state => state.projects);

  const initialState = {
    id: location.state?.id || `${list.length}`,
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
    inputs.projectManager === '' ||
    inputs.assigned === '' ||
    inputs.status === '') return alert('Campos incompletos');

    if (location.state) {
      dispatch(updateProjectList(inputs));
    } else {
      dispatch(addProjectList(inputs));
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
        style={{ padding: '30px' }}
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
        />
        <SelectInput
          title="Assigned to"
          name="assigned"
          value={inputs.assigned}
          handleChange={handleChange}
        />
        <SelectInput
          title="Status"
          name="status"
          value={inputs.status}
          handleChange={handleChange}
        />
        <Button type="submit">Create proyect</Button>
      </form>
    </Box>
  );
};

export default Form;
