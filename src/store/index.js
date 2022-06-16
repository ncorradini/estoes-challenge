import { configureStore } from '@reduxjs/toolkit';
import projects from './slices/projects';

export default configureStore({
  reducer: {
    projects,
  },
});
