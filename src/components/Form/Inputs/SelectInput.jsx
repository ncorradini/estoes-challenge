import { Typography } from '@mui/material';

const SelectInput = ({ title, name, handleChange, value }) => {
  return (
    <>
      <Typography sx={{ mt: '20px', fontSize: '14px' }}>
        {title}
      </Typography>
      <select
        defaultValue={value}
        name={name}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '16px',
        }}>
        <option value="default" disabled>Select a person</option>
        <option>adasd</option>
      </select>
    </>
  );
};

export default SelectInput;
