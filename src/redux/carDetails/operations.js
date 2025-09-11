import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCarById = createAsyncThunk(
  "carDetails/fetchCarDetails",
  async (carId, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${carId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
