const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
   theme: '',
};

const themeSlice = createSlice({
   name: 'theme',
   initialState: initialState.theme,
   reducers: {
      setTheme: (state, action) => {
         return action.payload;
      },
   },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
