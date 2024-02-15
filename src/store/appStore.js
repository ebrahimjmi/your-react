import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/reducer';
const appStore = configureStore({
  reducer
});

export default appStore;