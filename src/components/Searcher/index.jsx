import { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setTermSearch } from '../../store/slices/projects';

const Search = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#ffffff', 0.5),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    display: 'block',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: '#6b6b6b',
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    color: '#1e1e1e',
    fontSize: '14px',
  },
})); ;

const Searcher = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(setTermSearch(search));
  }, [search]);

  return (
    <Box sx={{
      width: '100%',
      mt: '30px',
    }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onChange={handleChange}
          placeholder="Search name project…"
        />
      </Search>
    </Box>
  );
};

export default Searcher;
