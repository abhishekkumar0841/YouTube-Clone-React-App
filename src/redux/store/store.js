import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../slices/videoSlice";
import loadingSlice from "../slices/loadingSlice";
import sideBarSlice from "../slices/sideBarSlice";
import searchResultsSlice from "../slices/searchResultsSlice";

const state = configureStore({
  reducer: {
    videos: videoSlice,
    loading: loadingSlice,
    sideBar: sideBarSlice,
    searchResults: searchResultsSlice,
  },
});

export default state;
