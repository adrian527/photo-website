import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import imageReducer from "./imageSlice";

const store = configureStore({
  reducer: {
    image: imageReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
