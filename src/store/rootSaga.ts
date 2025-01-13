import { all } from "redux-saga/effects";

import watchLocationRequest from "./sagas/LocationSaga";
import watchAuth from "./sagas/AuthSaga";
import watchService from "./sagas/ServiceSaga";
import watchFieldAgent from "./sagas/FieldAgentSaga";
import watchJobRequest from "./sagas/JobSaga";
import watchDashboard from "./sagas/DashbordSaga"
import watchProfile from "./sagas/ProfileSaga";

export default function* rootSaga() {
    yield all([
        watchLocationRequest(),
        watchAuth(),
        watchService(),
        watchFieldAgent(),
        watchJobRequest(),
        watchDashboard(),
        watchProfile(),
    ])
}