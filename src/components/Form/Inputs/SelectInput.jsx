import { Typography } from '@mui/material';

const SelectInput = ({ title, name, handleChange, value, options }) => {
  return (
    <>
      <Typography sx={{ mt: '20px', mb: '5px', fontSize: '14px' }}>
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
          color: '#575757',
        }}>
        <option value="default" disabled>Select</option>
        {options.map(option =>
          <option key={option}>
            {option}
          </option>,
        )}
      </select>
    </>
  );
};

export default SelectInput;
