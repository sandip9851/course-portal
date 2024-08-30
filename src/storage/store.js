import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import detailsReducer from "./detailsSlice";
import userReducer from "./userSlice";
import enrollReducer from "./enroll";

const store = configureStore({
  reducer: {
    course: courseReducer,
    detail: detailsReducer,
    user: userReducer,
    enroll: enrollReducer,
  },
});

export default store;
