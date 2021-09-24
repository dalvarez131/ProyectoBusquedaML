import { combineReducers } from 'redux';
import { queryApi } from "../services/query";
import searchInputSlice from "../component/Navbar/SearchInput/searchInputSlice";

export const rootReducer = combineReducers({
  [queryApi.reducerPath]: queryApi.reducer,
  searchInput: searchInputSlice
})