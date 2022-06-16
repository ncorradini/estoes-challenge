import { Typography } from '@mui/material';

const TextInput = ({ inputs, handleChange, title, name, value }) => {
  return (
    <>
      <Typography sx={{ fontSize: '14px' }}>{title}</Typography>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '8px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          fontSize: '16px',
        }} />
    </>
  );
};

export default TextInput;
