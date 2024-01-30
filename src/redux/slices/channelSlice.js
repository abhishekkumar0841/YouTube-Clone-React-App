import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channelDetails: [],
    channelVideoLists: [],
  },
  reducers: {
    setChannelDetails: (state, action) => {
      state.channelDetails = action.payload;
    },
    setChannelVideoLists: (state, action) => {
      state.channelVideoLists = action.payload;
    },
  },
});

export const { setChannelDetails, setChannelVideoLists } = channelSlice.actions;
export default channelSlice.reducer;
