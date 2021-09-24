import { createSlice } from "@reduxjs/toolkit";

export const searchInputSlice = createSlice({
  name: "searchInput",
  initialState: {
    searchQuery: ""
  },
  reducers: {
    updateSearchInputValue: (state, action) => {
      state.searchQuery = action.payload;
    },
  }
});

export const { updateSearchInputValue } = searchInputSlice.actions;

export default searchInputSlice.reducer;
