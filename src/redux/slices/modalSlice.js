import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    openModal: false,
  },
  reducers: {
    setOpenModal: (state) => {
      state.openModal = !state.openModal;
    },
  },
});

export const { setOpenModal } = modalSlice.actions;
export default modalSlice.reducer;
