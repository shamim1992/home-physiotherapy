import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        signInStart:(state)=>{
            state.loading = true;
            state.error = null; 
        },
        signInSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null; 
        },
        signInError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            
        },
        signOut: (state) => {
            state.currentUser = null;
            state.error = null;
            state.loading = false;
        }
    }
})

export const {signOut, signInStart, signInSuccess, signInError } = adminSlice.actions;

export default adminSlice.reducer;