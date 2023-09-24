import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authCheck: (state, action) => {
      state.auth = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { authCheck } = authSlice.actions;

export default authSlice.reducer;
