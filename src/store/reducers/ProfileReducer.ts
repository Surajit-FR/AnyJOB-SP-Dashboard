import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../../types/common";

const initialState: DataState = {
    authData: {},
    error: null,
    type: '',
    userData: {}
};

const ProfileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers: {
        // get super admin profile data
        getProfileDataRequest: (state, { payload, type }) => {
            state.type = type;
        },
        getProfileDataRequestSuccess: (state, { payload, type }) => {
            state.type = type;
            state.userData = payload?.data
        },
        getProfileDataRequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
    }
});

export const {
    getProfileDataRequest,
    getProfileDataRequestSuccess,
    getProfileDataRequestFailure,
} = ProfileSlice.actions;

export default ProfileSlice.reducer;