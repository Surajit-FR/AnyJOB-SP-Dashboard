import { createSlice } from "@reduxjs/toolkit";
import {DashboardData} from '../../../types/dashboard'

const initialState: DashboardData = {
   cardData:[],
    error: null,
    type: ''
};

const dashboardSlice = createSlice({
    name: "dashboardReducer",
    initialState,
    reducers: {
        fechDashboardCardRequest: (state, { payload, type }) => {
            state.type = type;
        },
        fechDashboardCardRequestSuccess: (state, { payload, type }) => {
            state.type = type;
            state.cardData = payload?.data;
        },
        fechDashboardCardRequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
    }
})

export const {
    fechDashboardCardRequest,
    fechDashboardCardRequestSuccess,
    fechDashboardCardRequestFailure,
} = dashboardSlice.actions

export default dashboardSlice.reducer;