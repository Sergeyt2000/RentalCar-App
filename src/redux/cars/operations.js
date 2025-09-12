import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  // async (filters, thunkAPI) => {
  //   try {
  //     const params = {
  //        page: 1,
  //        brand: filters?.brand,
  //        price: filters?.price,
  //        mileageFrom: filters?.mileageFrom,
  //        mileageTo: filters?.mileageTo,
  //      };
  //      Object.keys(params).forEach(
  //        (key) =>
  //          (params[key] === undefined || params[key] === "") &&
  //          delete params[key]
  //      );
  //     const response = await axios.get("/cars", {params});
  //     return response.data;
  async (params = {}, thunkAPI) => {
    try {
      const queryParams = { ...params };
      Object.keys(queryParams).forEach(
        (key) =>
          (queryParams[key] === undefined ||
            queryParams[key] === "" ||
            queryParams[key] === null) &&
          delete queryParams[key]
      );
      const response = await axios.get("/cars", { params: queryParams });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchMoreCars = createAsyncThunk(
//   "cars/fetchMoreCars",
//   async (queryParams = {}, thunkAPI) => {
//     try {
//       const response = await axios.get("/cars", { params: queryParams });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response);
//     }
//   }
// );

