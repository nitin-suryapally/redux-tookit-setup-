import { configureStore } from "@reduxjs/toolkit";
import { apicall, useGetDataQuery } from "../features/api/fetchdata";

// making api call using redux tool kit and using it to manage the store

export default configureStore({
  reducer: {
    [apicall.reducerPath]: apicall.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});


// can make the api call in any container now using useGetDataQuery();