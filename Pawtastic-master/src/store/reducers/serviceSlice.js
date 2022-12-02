import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  service: {}
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    createservice: (state, action) => {
      state.service = {
        ...state.service,
        ...action.payload
      };
    }
  }
});

// Action creators are generated for each case reducer function
export const { createservice } = serviceSlice.actions;

export default serviceSlice.reducer;
