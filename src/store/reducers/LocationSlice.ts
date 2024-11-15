import { createSlice } from '@reduxjs/toolkit';

type LocationState = {
    latitude: number | null;
    longitude: number | null;
    locationError: string | null;
}

const initialState: LocationState = {
    latitude: null,
    longitude: null,
    locationError: null,
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, { payload, type }) => {
            state.latitude = payload.latitude;
            state.longitude = payload.longitude;
            state.locationError = null;
        },
        setLocationError: (state, { payload, type }) => {
            state.locationError = payload;
        },
    },
});

export const {
    setLocation,
    setLocationError
} = locationSlice.actions;

export default locationSlice.reducer;