import { createSlice } from "@reduxjs/toolkit";
const videoSlice = createSlice({
  name: "videos",
  initialState: {
    initialVideos: [],
  },
  reducers: {
    setInitialVideos: (state, action) => {
      state.initialVideos = action?.payload;
    },
  },
});

export const { setInitialVideos } = videoSlice.actions;
export default videoSlice.reducer;
