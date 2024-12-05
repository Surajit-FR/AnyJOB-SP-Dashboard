import { all } from "redux-saga/effects";

import watchLocationRequest from "./sagas/LocationSaga";
import watchAuth from "./sagas/AuthSaga";
import watchService from "./sagas/ServiceSaga";

export default function* rootSaga() {
    yield all([
        watchLocationRequest(),
        watchAuth(),
        watchService(),
    ])
}