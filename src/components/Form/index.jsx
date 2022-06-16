import { Box, Button } from '@mui/material';
import { useState } from 'react';
import SelectInput from './Inputs/SelectInput';
import TextInput from './Inputs/TextInput';

const Form = () => {
  const initialState = {
    projectName: '',
    description: '',
    projectManager: '',
    assigned: '',
    status: '',
  };

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
    inputs.status === '') return false;
  };

  return (
    <Box sx={{
      width: '600px',
      background: '#fff',
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
          handleChange={handleChange}
        />
        <SelectInput
          title="Assigned to"
          name="assigned"
          handleChange={handleChange}
        />
        <SelectInput
          title="Status"
          name="status"
          handleChange={handleChange}
        />
        <Button>Create proyect</Button>
      </form>
    </Box>
  );
};

export default Form;
