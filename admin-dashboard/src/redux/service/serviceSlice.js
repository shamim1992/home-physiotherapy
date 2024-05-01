import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiUrl from '../../../ApiUrl'

const initialState ={
    service: [],
    loading: false,
    error: null
};

// Get all the services
export const getServices = createAsyncThunk(
    'getServices',
    async () => {
        try {
            const response = await axios.get(`${ApiUrl}/api/service/services`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const deleteServices = createAsyncThunk(
    'deleteServices',
    async (id) => {
        try {
            const response = await axios.delete(`${ApiUrl}/api/service/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
)

export const updateService = createAsyncThunk(
    'updateService',
    async ({ id, updatedService }) => {
        try {
            const response = await axios.put(`${ApiUrl}/api/service/${id}`, updatedService);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
)

export const serviceSlice = createSlice({
    name: 'serviceSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getServices.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on pending
            })
            .addCase(getServices.fulfilled, (state, action) => {
                state.loading = false;
                state.service = action.payload;
                state.error = null; // Reset error on success
            })
            .addCase(getServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            
            .addCase(deleteServices.pending, (state, action) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(deleteServices.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                  state.service = state.service.filter((ele) => ele.id !== id);
                }
            })
            .addCase(deleteServices.rejected, ()=>{
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateService.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(updateService.fulfilled, (state, action) => {
                state.loading = false;
                const updatedService = action.payload;
                state.service = state.service.map((s) =>
                    s.id === updatedService.id ? updatedService : s
                );
            })
            .addCase(updateService.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export const serviceReducer =  serviceSlice.reducer;



