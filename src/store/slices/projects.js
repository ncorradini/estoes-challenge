import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [],
  },
  reducers: {
    getProjectList: (state, action) => {
      return state.list;
    },
    addProjectList: (state, action) => {
      return {
        list: [...state.list, action.payload],
      };
    },
    updateProjectList: (state, action) => {
      return {
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
        list: state.list.filter(project => project.id !== action.payload),
      };
    },
  },
});

export const { getProjectList, addProjectList, updateProjectList, deleteProjectList } = projectSlice.actions;

export default projectSlice.reducer;
