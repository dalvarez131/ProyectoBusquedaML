/* External */
import { combineReducers } from 'redux';

/* Components */
import searchInputSlice from "../component/Navbar/SearchInput/searchInputSlice";

/* Services */
import { categoryApi } from "../services/categoryApi";
import { idApi } from "../services/idApi";
import { queryApi } from "../services/queryApi";

export const rootReducer = combineReducers({
  [categoryApi.reducerPath]: categoryApi.reducer,
  [idApi.reducerPath]: idApi.reducer,
  [queryApi.reducerPath]: queryApi.reducer,
  searchInput: searchInputSlice
})