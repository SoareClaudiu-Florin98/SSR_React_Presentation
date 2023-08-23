import { createSlice } from "@reduxjs/toolkit";
import ServicesState from "./serviceState";
import { fetchServices } from "./servicesService";

const initialState: ServicesState = {
    loading: false,
    servicesList: [],
    error: '',
}

const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => { 
        builder.addCase(fetchServices.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchServices.fulfilled, (state, action) => {
            state.loading = false;
            state.servicesList = action.payload
            state.error = ''
        })
        builder.addCase(fetchServices.rejected, (state, action) => {
            state.loading = false;
            state.servicesList = []
            state.error = action.error.message!
        })
    }    
})
const serviceReducer = serviceSlice.reducer;

export {serviceReducer};