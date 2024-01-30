import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../slices/videoSlice";
import loadingSlice from "../slices/loadingSlice";
import sideBarSlice from "../slices/sideBarSlice";
import searchResultsSlice from "../slices/searchResultsSlice";
import channelSlice from "../slices/channelSlice";

const state = configureStore({
  reducer: {
    videos: videoSlice,
    loading: loadingSlice,
    sideBar: sideBarSlice,
    searchResults: searchResultsSlice,
    channel: channelSlice,
  },
});

export default state;
