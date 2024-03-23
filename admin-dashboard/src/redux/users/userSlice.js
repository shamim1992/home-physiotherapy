import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    users: [],
    singleUser: {},
    loading: false,
    error: null
};

// Get all the userss
export const getUsers = createAsyncThunk(
    'getUsers',
    async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/users');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const getSingleUsers = createAsyncThunk(
    'getSingleUsers',
    async (id) => {
        try {
            const response = await axios.get(`http://localhost:5001/api/users/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
)

export const deleteUsers = createAsyncThunk(
    'deleteUsers',
    async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5001/api/users/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = null; 
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            
            .addCase(deleteUsers.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(deleteUsers.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                  state.users = state.users.filter((ele) => ele.id !== id);
                }
            })
            .addCase(deleteUsers.rejected, ()=>{
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(getSingleUsers.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(getSingleUsers.fulfilled, (state, action) => {
                state.loading = false;
                
                  state.singleUser = action.payload;
               
            })
            .addCase(getSingleUsers.rejected, ()=>{
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export const userReducer =  userSlice.reducer;



