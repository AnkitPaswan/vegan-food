import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    registerStart: (state) => {
      state.isLoading = true;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    addProductStart: (state) => {
      state.isLoading = true;
    },
    addProductSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    addProductFailure: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
