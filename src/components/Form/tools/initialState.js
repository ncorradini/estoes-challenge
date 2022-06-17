import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const location = useLocation();
const position = location.state?.id;
const { list } = useSelector(state => state.projects);

const date = new Date();
const creation = `
${date.getDate()}/${date.getMonth()}/${date.getFullYear()} 
${date.getHours()}:${date.getMinutes()}`;

export const initialState = {
  id: location.state?.id || `${list.length}`,
  creationDate: list[position]?.creationDate || creation,
  projectName: list[position]?.projectName || '',
  description: list[position]?.description || '',
  projectManager: list[position]?.projectManager || 'default',
  assigned: list[position]?.assigned || 'default',
  status: list[position]?.status || 'default',
};
