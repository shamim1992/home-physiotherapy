import { createSlice } from "@reduxjs/toolkit";

const initialState = {sidebar: 'true'};

export const themeSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleHeader: (state) => {
            state.sidebar = state.sidebar === 'true' ? 'false' : 'true';
        },
    },
})

export const { toggleHeader } = themeSlice.actions;

export default themeSlice.reducer;