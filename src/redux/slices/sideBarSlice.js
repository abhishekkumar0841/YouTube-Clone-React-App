import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        showSideBar: false,
    },
    reducers:{
        setSideBar: (state, action)=>{
            state.showSideBar = !state.showSideBar
        }
    }
})

export const {setSideBar} = sideBarSlice.actions;
export default sideBarSlice.reducer