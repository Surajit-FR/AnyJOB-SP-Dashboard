import { all } from "redux-saga/effects";

import watchLocationRequest from "./sagas/LocationSaga";

export default function* rootSaga() {
    yield all([
        watchLocationRequest(),
    ])
}