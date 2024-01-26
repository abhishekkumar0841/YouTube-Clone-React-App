import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        showSideBar: true,
    },
    reducers:{
        setSideBar: (state, action)=>{
            state.showSideBar = !state.showSideBar
        }
    }
})

export const {setSideBar} = sideBarSlice.actions;
export default sideBarSlice.reducer