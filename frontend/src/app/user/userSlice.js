import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AppUrl from "../../../ApiUrl";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}


export const getSingleUsers = createAsyncThunk(
    'getSingleUsers',
    async (id) => {
        try {
            const response = await axios.get(`${AppUrl}/api/users/${id}`);
            console.log(response.data) 
        } catch (error) {
            throw error;
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
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
        },
        signUpStart:(state) => {
            state.loading = true;
            state.error = null;
        },
        signUpSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        signUpError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }


    
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSingleUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSingleUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(getSingleUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { signOut, signInStart, signInSuccess, signInError , signUpStart, signUpError, signUpSuccess } = userSlice.actions;

// export default userSlice.reducer;
export const userReducer =  userSlice.reducer;