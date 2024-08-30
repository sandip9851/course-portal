
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrolled: [], 
};

const enrollSlice = createSlice({
  name: "enroll",
  initialState,
  reducers: {
    setEnrolled: (state, action) => {
      const courseId = action.payload.id;
      if (!state.enrolled.some((course) => course.id === courseId)) {
        state.enrolled.push(action.payload); 
      }
    },
  },
});

export const { setEnrolled } = enrollSlice.actions; 
export default enrollSlice.reducer; 
