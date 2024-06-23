import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  currentUser: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
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
  },
});

export const {
  addProductStart,
  addProductSuccess,
  addProductFailure,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
