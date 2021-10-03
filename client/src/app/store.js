/* External */
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

/* Services */
import { categoryApi } from "../services/categoryApi";
import { idApi } from "../services/idApi";
import { queryApi } from "../services/queryApi";


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(categoryApi.middleware)
    .concat(idApi.middleware)
    .concat(queryApi.middleware)
})

export default store;