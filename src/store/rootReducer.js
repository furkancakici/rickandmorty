import { combineReducers } from '@reduxjs/toolkit';
import locationsReducer from './slices/locationsSlice';
import charactersReducer from './slices/charactersSlice';

const rootReducer = combineReducers({
   locations: locationsReducer,
   characters: charactersReducer,
});

export default rootReducer;
