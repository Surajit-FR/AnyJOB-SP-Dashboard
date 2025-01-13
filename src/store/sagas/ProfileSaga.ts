import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator } from "../../../types/common";
import { showToast } from "../../utils/Toast";
import { GETPROFILEINFO } from "../api/Api";
import { getProfileDataRequestFailure, getProfileDataRequestSuccess } from "../reducers/ProfileReducer";

// job detail fetcher saga
export function* fetProfileData({ payload, type }: { payload: { id: string }, type: string }): SagaGenerator<{ data: ApiResponse<any> }> {
    try {
        const resp = yield call(GETPROFILEINFO, payload?.id);
        const result: ApiResponse<any> = resp?.data;
        if (result?.success) {
            yield put(getProfileDataRequestSuccess(result));
            // yield put(fetchJobDetailRequest("jobReducers/fetchJobDetailRequest"))
            showToast({ message: result?.message || 'New field agent added.', type: 'success', durationTime: 3500, position: "top-center" });
        };
    } catch (error: any) {
        yield put(getProfileDataRequestFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message, type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};


// Watcher generator function
export default function* watchProfile() {
    yield takeLatest("profileSlice/getProfileDataRequest", fetProfileData)
}