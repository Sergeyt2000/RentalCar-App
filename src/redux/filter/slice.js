import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  mileageFrom: "",
  mileageTo: "",
  price: "",
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      //   state[payload.name] = payload.value;
      //   Object.assign(state, payload);
      return { ...state, ...payload };
    },

      clearFilters: () => initialState,
    //       (state, { payload }) => {
    //   Object.assign(state, initialState);
    //   return { ...state, ...payload };
    // },
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
