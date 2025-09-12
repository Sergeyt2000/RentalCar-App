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
  reducers: {
    setPage(state, action) {
      state.items.page = action.payload;
    },
    resetCars(state) {
      state.items = { cars: [], totalCars: 0, page: 1, totalPages: 1 };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        // state.items = action.payload;
        state.items.cars = action.payload.cars;
        state.items.totalCars = action.payload.totalCars;
        state.items.totalPages = action.payload.totalPages;
        state.isLoading = false;
        clearFilters();
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {
          message: action.payload?.data?.message || "Something went wrong",
          code: action.payload?.status || 500,
        };
      });
  },
});

export const { setPage, resetCars } = carsSlice.actions;
export default carsSlice.reducer;
