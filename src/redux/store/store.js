import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../slices/videoSlice";
import loadingSlice from "../slices/loadingSlice";

const state = configureStore({
  reducer: {
    videos: videoSlice,
    loading: loadingSlice,
  },
});

export default state;
