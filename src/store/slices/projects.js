import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [],
    termSearch: '',
  },
  reducers: {
    getProjectList: (state, action) => {
      return state.list;
    },
    addProjectList: (state, action) => {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    },
    updateProjectList: (state, action) => {
      return {
        ...state,
        list: state.list.map(project => {
          if (project.id === action.payload.id) {
            return action.payload;
          } else {
            return project;
          }
        }),
      };
    },
    deleteProjectList: (state, action) => {
      return {
        ...state,
        list: state.list.filter(project => project.id !== action.payload),
      };
    },
    setTermSearch: (state, action) => {
      return {
        ...state,
        termSearch: action.payload,
      };
    },
  },
});

export const {
  getProjectList,
  addProjectList,
  updateProjectList,
  deleteProjectList,
  setTermSearch,
} = projectSlice.actions;

export default projectSlice.reducer;
