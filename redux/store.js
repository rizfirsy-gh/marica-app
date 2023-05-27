import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user";
import anakSlice from "./slices/anak";

export const store = configureStore({
  reducer: {
    user: userSlice,
    anak: anakSlice,
  },
});
