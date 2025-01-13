import { createSlice } from "@reduxjs/toolkit";
import {JobsState} from '../../../types/jobs'

const initialState: JobsState = {
    job: {
        name: "",
        createdAt: "",
        date: "",
        email: "",
        phone: "",
        address: "",
        type: [],
        imageUrl: [],
        detail: "",
    },
    error: null,
    type: '',
    filteredJob: [],
    jobSuccess:false,
};

const JobsReducer = createSlice({
    name: "jobReducers",
    initialState,
    reducers: {
        fetchJobDetailRequest: (state, { payload, type }) => {
            state.type = type;
        },
        fetchJobDetailRequestSuccess: (state, { payload, type }) => {
            state.type = type;
            state.job = payload?.data;
        },
        fetchJobDetailRequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
        fetchJobDetailRequestByType: (state, { payload, type }) => {
            state.type = type;
        },
        fetchJobDetailRequestByTypeSuccess: (state, { payload, type }) => {
            state.type = type;
            state.filteredJob = payload?.data?.results;
        },
        fetchJobDetailRequestByTypeFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
        assignJobRequest: (state, { payload, type }) => {
            state.type = type;
            state.jobSuccess= false;
        },
        assignJobRequestSuccess: (state, { payload, type }) => {
            state.type = type;
            state.jobSuccess = payload?.success;
        },
        assignJobRequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
            state.jobSuccess= false
        },
    }
})

export const {
    fetchJobDetailRequest,
    fetchJobDetailRequestSuccess,
    fetchJobDetailRequestFailure,
    fetchJobDetailRequestByType,
    fetchJobDetailRequestByTypeSuccess,
    fetchJobDetailRequestByTypeFailure,
    assignJobRequest,
    assignJobRequestSuccess,
    assignJobRequestFailure,
} = JobsReducer.actions

export default JobsReducer.reducer;