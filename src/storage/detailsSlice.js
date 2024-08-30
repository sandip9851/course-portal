import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: [],
};

const detailsSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
