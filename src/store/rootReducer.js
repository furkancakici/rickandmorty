import { combineReducers } from '@reduxjs/toolkit';
import locationsReducer from './slices/locationsSlice';
import charactersReducer from './slices/charactersSlice';
import themeReducer from './slices/themeSlice';

const rootReducer = combineReducers({
   locations: locationsReducer,
   theme: themeReducer,
   characters: charactersReducer,
});

export default rootReducer;
