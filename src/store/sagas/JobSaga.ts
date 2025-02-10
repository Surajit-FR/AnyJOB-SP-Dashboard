import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator } from "../../../types/common";
import { showToast } from "../../utils/Toast";
import { ASSIGNJOB, GETJOBDETAIL, GETSERVICEREQUESTBYTYPE } from "../api/Api";
import {
    fetchJobDetailRequestFailure,
    fetchJobDetailRequestSuccess,
    fetchJobDetailRequestByTypeSuccess,
    fetchJobDetailRequestByTypeFailure,
    assignJobRequestSuccess,
    // fetchJobDetailRequestByType,
    assignJobRequestFailure
} from "../reducers/jobReducer";
import { IJobDetail, JobsState } from "../../../types/jobs";


// job detail fetcher saga
export function* fetchJobDetailSaga({ payload, type }: { payload: { id: string }, type: string }): SagaGenerator<{ data: ApiResponse<IJobDetail> }> {
    try {
        const resp = yield call(GETJOBDETAIL, payload?.id);
        const result: ApiResponse<IJobDetail> = resp?.data;
        if (result?.success) {
            yield put(fetchJobDetailRequestSuccess(result));
            // yield put(fetchJobDetailRequest("jobReducers/fetchJobDetailRequest"))
            showToast({ message: result?.message || 'New field agent added.', type: 'success', durationTime: 3500, position: "top-center" });
        };
    } catch (error: any) {
        yield put(fetchJobDetailRequestFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message, type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

export function* fetchJobFilteredData({ payload, type }: { payload: { reqType: string }, type: string }): SagaGenerator<{ data: ApiResponse<IJobDetail> }> {
    try {
        const resp = yield call(GETSERVICEREQUESTBYTYPE, payload?.reqType);
        const result: ApiResponse<IJobDetail> = resp?.data;
        if (result?.success) {
            yield put(fetchJobDetailRequestByTypeSuccess(result));
            // yield put(fetchJobDetailRequest("jobReducers/fetchJobDetailRequest"))
            showToast({ message: result?.message || 'New field agent added.', type: 'success', durationTime: 3500, position: "top-center" });
        };
    } catch (error: any) {
        yield put(fetchJobDetailRequestByTypeFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message, type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

export function* assignJobRequest({ payload, type }: { payload: { serviceId: string, assignedAgentId: string, handleClose?: () => void, emmitToScket?:() => void }, type: string, }): SagaGenerator<{ data: ApiResponse<JobsState> }> {
    try {
        const resp = yield call(ASSIGNJOB, payload);
        const result: ApiResponse<JobsState> = resp?.data;
        if (result?.success) {
            yield put(assignJobRequestSuccess(result));
            payload?.emmitToScket && payload.emmitToScket()
            payload?.handleClose && payload.handleClose()

            // yield put(fetchJobDetailRequestByType("jobReducers/fetchJobDetailRequestByType",{requestProgress: "Accepted"}))
            showToast({ message: result?.message || 'New field agent added.', type: 'success', durationTime: 3500, position: "top-center" });
        };
    } catch (error: any) {
        yield put(assignJobRequestFailure(error?.response?.data?.message));
    };
};

// Watcher generator function
export default function* watchJobRequest() {
    yield takeLatest("jobReducers/fetchJobDetailRequest", fetchJobDetailSaga)
    yield takeLatest("jobReducers/fetchJobDetailRequestByType", fetchJobFilteredData)
    yield takeLatest("jobReducers/assignJobRequest", assignJobRequest)
}
