const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
   characters: [],
};

const charactersSlice = createSlice({
   name: 'characters',
   initialState: initialState.characters,
   reducers: {
      setCharacters: (state, action) => {
         return action.payload;
      },
   },
});

export const { setCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
