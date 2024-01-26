import { createSlice } from "@reduxjs/toolkit";
const videoSlice = createSlice({
  name: "videos",
  initialState: {
    initialVideos: [],
    searchVideos: [],
    selectedCategory: "New",
  },
  reducers: {
    setInitialVideos: (state, action) => {
      state.initialVideos = action?.payload;
    },
    setSearchVideos: (state, action) => {
      state.searchVideos = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action?.payload;
    },
  },
});

export const { setInitialVideos, setSearchVideos, setSelectedCategory } = videoSlice.actions;
export default videoSlice.reducer;
