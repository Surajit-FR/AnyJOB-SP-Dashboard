import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../../types/common";

const initialState: DataState = {
    serviceData: [],
    acceptedServiceData: [],
    error: null,
    type: ''
};

const ServiceReducers = createSlice({
    name: "serviceReducers",
    initialState,
    reducers: {
        // Fetch nearby Service
        FetchNearbyServicesRequest: (state, { payload, type }) => {
            state.type = type;
        },
        FetchNearbyServicesSuccess: (state, { payload, type }) => {
            state.type = type;
            state.serviceData = payload?.data;
        },
        FetchNearbyServicesFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Handle Service Req
        HandleServicesRequest: (state, { payload, type }) => {
            state.type = type;
        },
        HandleServicesSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        HandleServicesFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Get accepted Service Req
        GetAcceptedServicesRequest: (state, { payload, type }) => {
            state.type = type;
        },
        GetAcceptedServicesSuccess: (state, { payload, type }) => {
            state.type = type;
            state.acceptedServiceData = payload?.data;
        },
        GetAcceptedServicesFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
    }
});

export const {
    FetchNearbyServicesRequest,
    FetchNearbyServicesSuccess,
    FetchNearbyServicesFailure,

    HandleServicesRequest,
    HandleServicesSuccess,
    HandleServicesFailure,

    GetAcceptedServicesRequest,
    GetAcceptedServicesSuccess,
    GetAcceptedServicesFailure,
} = ServiceReducers.actions;

export default ServiceReducers.reducer;