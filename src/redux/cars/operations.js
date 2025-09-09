import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (filters, thunkAPI) => {
    try {
       const params = {
         brand: filters?.brand,
         price: filters?.price,
         mileageFrom: filters?.mileageFrom,
         mileageTo: filters?.mileageTo,
         page: filters?.page || 1,
       };
       Object.keys(params).forEach(
         (key) =>
           (params[key] === undefined || params[key] === "") &&
           delete params[key]
       );
      const response = await axios.get("/cars", {params});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
