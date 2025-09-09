import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations.js";
import { clearFilters } from "../filter/slice.js"

const initialState = {
  items: {
    cars: [],
    totalCars: 0,
    page: 1,
    totalPages: 1,
  },
  isLoading: false,
  error: null,
};
const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        clearFilters();
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
