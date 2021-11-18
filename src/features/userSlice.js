import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state.
// select user from state userslice user
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
console.log(userSlice.reducer);
