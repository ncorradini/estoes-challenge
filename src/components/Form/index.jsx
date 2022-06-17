import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
// Components JSX
import { Box, Button } from '@mui/material';
import SelectInput from './Inputs/SelectInput';
import TextInput from './Inputs/TextInput';
// Functions and consts
import { initialState } from './tools/initialState';
import { opAssigned } from './options/opAssigned';
import { opProjectManager } from './options/opProjectManager';
import { opStatus } from './options/opStatus';
import { handleSubmit } from './tools/handleSubmit';

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [inputs, setInputs] = useState(initialState());

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{
      width: '600px',
      background: '#fff',
      mt: '40px',
      mb: '150px',
    }}>
      <form
        onSubmit={e => handleSubmit(e, inputs, navigate, dispatch, location)}
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
