import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, email } = action.payload;
      state.user.push({ id: nanoid(), name, email });
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
