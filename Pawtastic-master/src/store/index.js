import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import serviceSlice from "./reducers/serviceSlice";
import userProfileSlice from "./reducers/userProfileSlice";

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice,
    auth: authSlice,
    service: serviceSlice
  }
});
