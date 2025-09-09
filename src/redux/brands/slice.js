import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations";

const initialState = {
  brands: [],
  isLoading: false,
  error: null,
};
const brandsSlice = createSlice({
    name: "brands",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state) => {
                state.isLoading = true;
                state.error = null;
             })
            .addCase(fetchBrands.fulfilled, (state, action) => {                
                state.brands = action.payload;
                state.isLoading = false;
             })
            .addCase(fetchBrands.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
             });
    },
});

export default brandsSlice.reducer;