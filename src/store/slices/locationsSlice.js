const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
   locations: [],
};

const locationsSlice = createSlice({
   name: 'locations',
   initialState: initialState.locations,
   reducers: {
      setLocations: (state, action) => {
         return action.payload;
      },
   },
});

export const { setLocations } = locationsSlice.actions;
export default locationsSlice.reducer;
