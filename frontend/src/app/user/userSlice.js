import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
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
});

export const {signOut, signInStart, signInSuccess, signInError } = userSlice.actions;

export default userSlice.reducer;