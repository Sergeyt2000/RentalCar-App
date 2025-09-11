import { createSlice } from "@reduxjs/toolkit";
import { fetchCarById } from "./operations.js"

const carDetailsSlice = createSlice({
    name: "carDetails",
    initialState: {
        item: {},
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCarById.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchCarById.fulfilled, (state, { payload }) => {
            state.item = payload;
            state.isLoading = false;
        });
        builder.addCase(fetchCarById.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = {
                message: payload?.data?.message || "Something went wrong",
                code: payload?.status || 500
            };
        });
    }
});

export default carDetailsSlice.reducer;