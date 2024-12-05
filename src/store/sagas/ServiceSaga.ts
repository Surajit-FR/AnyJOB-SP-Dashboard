import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator } from "../../../types/common";
import { showToast } from "../../utils/Toast";
import {
    FetchNearbyServicesFailure,
    FetchNearbyServicesRequest,
    FetchNearbyServicesSuccess,
    GetAcceptedServicesFailure,
    GetAcceptedServicesSuccess,
    HandleServicesFailure,
    HandleServicesSuccess,
} from "../reducers/ServiceReducers";
import {
    FETCHNEARBYSERVICEREQ,
    GETACCEPTEDSERVICEREQ,
    HANDLESERVICEREQ,
} from "../api/Api";
import { ServiceRequest, ServiceUpdateResponse } from "../../../types/services";


// fetchNearByServiceSaga generator function
export function* fetchNearByServiceSaga({ type }: { type: string }): SagaGenerator<{ data: ApiResponse<Array<ServiceRequest>> }> {
    try {
        const resp = yield call(FETCHNEARBYSERVICEREQ);
        const result: ApiResponse<Array<ServiceRequest>> = resp?.data;
        if (result?.success) {
            yield put(FetchNearbyServicesSuccess(result));
        };
    } catch (error: any) {
        yield put(FetchNearbyServicesFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message, type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

// handleServiceReqSaga generator function
export function* handleServiceReqSaga({ payload, type }: { payload: { serviceId: string, data: { isReqAcceptedByServiceProvider: boolean, requestProgress: string } }, type: string }): SagaGenerator<{ data: ApiResponse<ServiceUpdateResponse> }> {
    try {
        const resp = yield call(HANDLESERVICEREQ, payload?.serviceId, payload?.data);
        const result: ApiResponse<ServiceUpdateResponse> = resp?.data;

        if (result?.success) {
            yield put(HandleServicesSuccess(result));
            yield put(FetchNearbyServicesRequest('serviceReducers/FetchNearbyServicesRequest'));
            showToast({ message: result?.message, type: 'success', durationTime: 3000, position: "top-center" });
        };
    } catch (error: any) {
        yield put(HandleServicesFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message, type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

// getAcceptedServiceReqSaga generator function
export function* getAcceptedServiceReqSaga({ type }: { type: string }): SagaGenerator<{ data: ApiResponse<Array<ServiceRequest>> }> {
    try {
        const resp = yield call(GETACCEPTEDSERVICEREQ);
        const result: ApiResponse<Array<ServiceRequest>> = resp?.data;

        if (result?.success) {
            yield put(GetAcceptedServicesSuccess(result));
            // yield put(FetchNearbyServicesRequest('serviceReducers/FetchNearbyServicesRequest'));
        };
    } catch (error: any) {
        yield put(GetAcceptedServicesFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message, type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};


// Watcher generator function
export default function* watchService() {
    yield takeLatest('serviceReducers/FetchNearbyServicesRequest', fetchNearByServiceSaga);
    yield takeLatest('serviceReducers/HandleServicesRequest', handleServiceReqSaga);
    yield takeLatest('serviceReducers/GetAcceptedServicesRequest', getAcceptedServiceReqSaga);
};