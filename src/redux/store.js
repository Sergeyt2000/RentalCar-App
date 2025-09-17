import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import brandsReducer from "./brands/slice";
import carsReducer from "./cars/slice";
import filtersReducer from "./filter/slice";
import favoritesReducer from "./favorites/slice";
import carDetailsReducer from "./carDetails/slice"
import storage from "redux-persist/lib/storage";

const persistFavoritesConfig = {
  key: "favoritesCars",
  storage,
  whitelist: ["items"],
};

const persistedFavoritesReducer = persistReducer(
  persistFavoritesConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    carDetails: carDetailsReducer,
    // brands: brandsReducer,
    filters: filtersReducer,
    // favorites: favoritesReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);