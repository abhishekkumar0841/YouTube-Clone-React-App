import { createSlice } from "@reduxjs/toolkit";
const videoSlice = createSlice({
  name: "videos",
  initialState: {
    initialVideos: [],
    searchVideos: [],
    selectedCategory: "New",
    videoDetails: null,
    relatedVideos: [],
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
    setVideoDetails: (state, action) => {
      state.videoDetails = action.payload;
    },
    setRelatedVideos: (state, action) => {
      state.relatedVideos = action.payload;
    },
  },
});

export const {
  setInitialVideos,
  setSearchVideos,
  setSelectedCategory,
  setVideoDetails,
  setRelatedVideos,
} = videoSlice.actions;
export default videoSlice.reducer;
