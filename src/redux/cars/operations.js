import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (params = {}, thunkAPI) => {
    try {
      const queryParams = { ...params };    
      // Object.keys(queryParams).forEach(
      //   (key) =>
      //     (queryParams[key] === undefined ||
      //       queryParams[key] === "" ||
      //       queryParams[key] === null) &&
      //     delete queryParams[key]
      // );
      const response = await axios.get("/cars", { params: queryParams });
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
