import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {}
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    createUserProfile: (state, action) => {
      //state.userProfile += action.payload;
      state.userProfile = {
        ...state.userProfile,
        ...action.payload
      };
    }
  }
});

// Action creators are generated for each case reducer function
export const { createUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
