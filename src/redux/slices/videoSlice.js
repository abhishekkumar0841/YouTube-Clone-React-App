import { createSlice } from "@reduxjs/toolkit";
const videoSlice = createSlice({
  name: "videos",
  initialState: {
    initialVideos: [],
    selectedCategory: "New",
  },
  reducers: {
    setInitialVideos: (state, action) => {
      state.initialVideos = action?.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action?.payload;
    },
  },
});

export const { setInitialVideos, setSelectedCategory } = videoSlice.actions;
export default videoSlice.reducer;
