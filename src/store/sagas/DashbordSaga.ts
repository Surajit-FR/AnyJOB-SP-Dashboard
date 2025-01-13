import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator } from "../../../types/common";
import { showToast } from "../../utils/Toast";
import { GETJOBDETAIL } from "../api/Api";
import { fetchJobDetailRequest, fetchJobDetailRequestFailure, fetchJobDetailRequestSuccess } from "../reducers/jobReducer";
import { IJobDetail } from "../../../types/jobs";

// job detail fetcher saga
export function* fetchDaboardCardSaga({ payload, type }: { payload: { id :string }, type: string}): SagaGenerator<{ data: ApiResponse<IJobDetail> }> {
    try {
        console.log("payloadd=========>",payload)
        const resp = yield call(GETJOBDETAIL, payload?.id);
        const result: ApiResponse<IJobDetail> = resp?.data;
        if (result?.success) {
            yield put(fetchJobDetailRequestSuccess(result));
            yield put(fetchJobDetailRequest("jobReducers/fetchJobDetailRequest"))
        };
    } catch (error: any) {
        yield put(fetchJobDetailRequestFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message, type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};


// Watcher generator function
export default function* watchJobRequest() {
    yield takeLatest("dashboardReducer/fechDashboardCardRequest", fetchDaboardCardSaga)
}
