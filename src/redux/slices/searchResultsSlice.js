import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    results: [],
    searchTerm: "",
  },
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setResults, setSearchTerm } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
