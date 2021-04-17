import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../features/navigationSlice'

export default configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});
