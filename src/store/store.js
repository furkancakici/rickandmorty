import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import locationsReducer from './slices/locationsSlice';

const Store = configureStore({
   reducer: rootReducer,
   devTools: process.env.NODE_ENV === 'development',
});

export default Store;
