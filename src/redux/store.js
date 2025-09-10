import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
import brandsReducer from "./brands/slice";
import carsReducer from "./cars/slice";
import filtersReducer from "./filter/slice";
import favoritesReducer from "./favorites/slice";


export const store = configureStore({
  reducer: {
    cars: carsReducer,
    // favorites: persistedFavoritesReducer,
    // carDetails: carDetailsReducer,
    brands: brandsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
});