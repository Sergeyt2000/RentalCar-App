export const selectCars = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export const selectPage = (state) => state.cars.items.page;
export const selecttotalPages = (state) => state.cars.items.totalPages;