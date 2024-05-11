import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import AppUrl from '../../../ApiUrl';

const initialState = {
    appointment: [],
    singleAppointment: {},
    loading: false,
    error: null
};

export const getAppointment = createAsyncThunk(
    'getAppointment',
    async () => {
        try {
            const response = await axios.get(`${AppUrl}/api/booking/admin/bookings`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const singleAppointment = createAsyncThunk(
    'singleAppointment',
    async (id) => {
        try {
            const response = await axios.get(`${AppUrl}/api/booking/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
)

export const updateAppointmentStatus = createAsyncThunk(
    'updateAppointmentStatus',
    async ({ id, status }) => {
        try {
            const response = await axios.put(`${AppUrl}/api/booking/${id}`, { status });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

const appointmentSlice = createSlice({
    name: 'appointmentSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAppointment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAppointment.fulfilled, (state, action) => {
                state.loading = false;
                state.appointment = action.payload;
                state.error = null;
            })
            .addCase(getAppointment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(singleAppointment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(singleAppointment.fulfilled, (state, action) => {
                state.loading = false;
                state.singleAppointment = action.payload;
                state.error = null;
            })
            .addCase(singleAppointment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            
            .addCase(updateAppointmentStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateAppointmentStatus.fulfilled, (state, action) => {
                state.loading = false;
                const updatedAppointmentId = action.payload.id;
                state.appointment = state.appointment.map(appointment => {
                    if (appointment._id === updatedAppointmentId) {
                        return { ...appointment, status: action.payload.status };
                    }
                    return appointment;
                });
                state.error = null;
            })
            .addCase(updateAppointmentStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const appointmentReducer = appointmentSlice.reducer;
