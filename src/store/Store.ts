import { configureStore } from "@reduxjs/toolkit";
import LocationSlice from "./reducers/LocationSlice";
import AuthSlice from "./reducers/AuthReducers";
import ServiceSlice from "./reducers/ServiceReducers";
import FieldAgentSlice from "./reducers/FieldAgentSlice"
import JobsReducer from "./reducers/jobReducer"
import dashboardSlice from './reducers/DashboardReducer'
import ProfileSlice from "./reducers/ProfileReducer"


import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer: {
        locationSlice: LocationSlice,
        authSlice: AuthSlice,
        serviceSlice: ServiceSlice,
        fieldAgentSlice: FieldAgentSlice,
        jobSlice: JobsReducer,
        dashboardSlice: dashboardSlice,
        profileSlice: ProfileSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;