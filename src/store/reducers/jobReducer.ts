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
    totalJobElements:0,
    isJobLoading:false,
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
            state.isJobLoading=true;
            state.jobSuccess= false;
        },
        fetchJobDetailRequestByTypeSuccess: (state, { payload, type }) => {
            state.type = type;
            state.filteredJob = payload?.data?.results;
            state.totalJobElements = payload?.data?.totalRequest
            state.isJobLoading= false
            state.jobSuccess= true
        },
        fetchJobDetailRequestByTypeFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
            state.isJobLoading= false
            state.jobSuccess= false
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
        cleanup: () => initialState,
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
    cleanup,
} = JobsReducer.actions

export default JobsReducer.reducer;