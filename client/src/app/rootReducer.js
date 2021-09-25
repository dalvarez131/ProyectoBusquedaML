/* External */
import { combineReducers } from 'redux';

/* Components */
import searchInputSlice from "../component/Navbar/SearchInput/searchInputSlice";

/* Services */
import { idApi } from "../services/idApi";
import { queryApi } from "../services/queryApi";

export const rootReducer = combineReducers({
  [idApi.reducerPath]: idApi.reducer,
  [queryApi.reducerPath]: queryApi.reducer,
  searchInput: searchInputSlice
})