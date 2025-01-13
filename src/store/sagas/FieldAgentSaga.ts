import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator } from "../../../types/common";
import { showToast } from "../../utils/Toast";
import { addFieldAgent } from "../../../types/fieldAgentTypes"
import {
    FetchFieldAgentRequest,
    FetchFieldAgentRequestSuccess,
    FetchFieldAgentRequestFailure,

    // AddFieldAgentRequest,
    AddFieldAgentRequestSuccess,
    AddFieldAgentRequestFailure,

    // updateFieldAgentRequest,
    updateFieldAgentRequestSuccess,
    updateFieldAgentRequestFailure,
    updateFieldAgentRequestRoleSuccess,
    assaaignTeamLeadSuccess,
    assaaignTeamLeadFailure,
    FetchAllFieldAgentForPermissionRequestFailure,
    FetchAllFieldAgentForPermissionRequestSuccess,
    UpdateFieldAgentsPermissionsRequestFailure,
    UpdateFieldAgentsPermissionsRequestSuccess,
    FetchAllFieldAgentForPermissionRequest

} from "../reducers/FieldAgentSlice";
import {
    GETALLFIELDAGENTS,
    ADDFIELDAGENTS,
    UPDATEFIELDAGENTROLE,
    ASSIGNTEAMLEAD,
    GETASSOSSIATESS,
    UPDATEFIELDAGENTPERMISSION,
} from "../api/Api";
import { ServiceRequest } from "../../../types/services";


// fetchFieldAgentSaga generator function
export function* fetchFieldAgentSaga({ payload, type }: { payload: { _id: string, }, type: string },): SagaGenerator<{ data: ApiResponse<Array<ServiceRequest>> }> {
    try {
        const resp = yield call(GETALLFIELDAGENTS, payload?._id);
        const result: ApiResponse<Array<ServiceRequest>> = resp?.data;
        if (result?.success) {
            yield put(FetchFieldAgentRequestSuccess(result));
        };
    } catch (error: any) {
        yield put(FetchFieldAgentRequestFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message, type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

export function* addFieldAgentSaga({ payload, type }: { payload: { data: addFieldAgent, reset: () => void, handleClose: () => void }, type: string }): SagaGenerator<{ data: ApiResponse<addFieldAgent> }> {
    try {
        const resp = yield call(ADDFIELDAGENTS, payload?.data);
        const result: ApiResponse<addFieldAgent> = resp?.data;
        if (result?.success) {
            yield put(AddFieldAgentRequestSuccess(result));
            payload?.reset();
            payload?.handleClose();
            showToast({ message: result?.message || 'New field agent added.', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(FetchFieldAgentRequest('FiledAgentReducer/FetchFieldAgentRequest'));
        };
    } catch (error: any) {
        yield put(AddFieldAgentRequestFailure(error?.response?.data?.message));
    };
};

export function* updateFieldAgentSaga({ payload, type }: { payload: { fieldAgentId: string, data: any, reset: () => void }, type: string }): SagaGenerator<{ data: ApiResponse<addFieldAgent> }> {
    try {
        const resp = yield call(ADDFIELDAGENTS, payload?.data);
        const result: ApiResponse<addFieldAgent> = resp?.data;
        if (result?.success) {
            yield put(updateFieldAgentRequestSuccess(result));
            payload?.reset();
            showToast({ message: result?.message || 'New field agent added.', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(FetchFieldAgentRequest('FiledAgentReducer/FetchFieldAgentRequest'));
        };
    } catch (error: any) {
        yield put(AddFieldAgentRequestFailure(error?.response?.data?.message));
    };
};

export function* updateFieldAgentRoleSaga({ payload, type }: { payload: { fieldAgentId: string }, type: string }): SagaGenerator<{ data: ApiResponse<addFieldAgent> }> {
    try {
        const resp = yield call(UPDATEFIELDAGENTROLE, payload?.fieldAgentId);
        const result: ApiResponse<addFieldAgent> = resp?.data;
        if (result?.success) {
            yield put(updateFieldAgentRequestRoleSuccess(result));
            showToast({ message: result?.message || 'New field agent added.', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(FetchFieldAgentRequest('FiledAgentReducer/FetchFieldAgentRequest'));
        };
    } catch (error: any) {
        yield put(updateFieldAgentRequestFailure(error?.response?.data?.message));
    };
};

export function* assaignTeamLeadSaga({ payload, type }: { payload: { fieldAgentId: string, handleClose?:()=>void }, type: string }): SagaGenerator<{ data: ApiResponse<addFieldAgent> }> {
    try {
        const resp = yield call(ASSIGNTEAMLEAD, payload?.fieldAgentId);
        const result: ApiResponse<addFieldAgent> = resp?.data;
        if (result?.success) {
            yield put(assaaignTeamLeadSuccess(result));
            showToast({ message: result?.message || 'New field agent added.', type: 'success', durationTime: 3500, position: "top-center" });
            payload?.handleClose && payload.handleClose()
            yield put(FetchFieldAgentRequest('FiledAgentReducer/FetchFieldAgentRequest'));
        };
    } catch (error: any) {
        yield put(assaaignTeamLeadFailure(error?.response?.data?.message));
    };
};


// fetchFieldAgentSaga generator for permission page function
export function* fetchFieldAgentPerPermissionSaga({ payload, type }: { payload: { _id: string, }, type: string },): SagaGenerator<{ data: ApiResponse<Array<ServiceRequest>> }> {
    try {
        const resp = yield call(GETASSOSSIATESS, payload?._id);
        const result: ApiResponse<Array<ServiceRequest>> = resp?.data;
        if (result?.success) {
            yield put(FetchAllFieldAgentForPermissionRequestSuccess(result));
        };
    } catch (error: any) {
        yield put(FetchAllFieldAgentForPermissionRequestFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message, type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

// fetchFieldAgentSaga generator for permission page function
export function* updateFieldAgentPermissionSaga({ payload, type }: {
    payload: {
        data: {
            userId: string,
            acceptRequest: boolean,
            assignJob: boolean,
            fieldAgentManagement: boolean
        },
        onClose?:()=> void,
        id?: string
    }, type: string
},): SagaGenerator<{ data: ApiResponse<any> }> {
    try {
        const resp = yield call(UPDATEFIELDAGENTPERMISSION, payload?.data );
        const result: ApiResponse<Array<ServiceRequest>> = resp?.data;
        if (result?.success) {
            yield put(UpdateFieldAgentsPermissionsRequestSuccess(result));
            payload.onClose && payload.onClose()
            showToast({ message: result?.message || 'New field agent added.', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(FetchAllFieldAgentForPermissionRequest('fieldAgentReducers/FetchAllFieldAgentForPermissionRequest'))
        };
    } catch (error: any) {
        yield put(UpdateFieldAgentsPermissionsRequestFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message, type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

// Watcher generator function
export default function* watchFieldAgent() {
    yield takeLatest('fieldAgentReducers/FetchFieldAgentRequest', fetchFieldAgentSaga);
    yield takeLatest('fieldAgentReducers/AddFieldAgentRequest', addFieldAgentSaga);
    yield takeLatest('fieldAgentReducers/updateFieldAgentRequest', updateFieldAgentSaga);
    yield takeLatest('fieldAgentReducers/updateFieldAgentRoleRequest', updateFieldAgentRoleSaga)
    yield takeLatest('fieldAgentReducers/assaaignTeamLeadRequest', assaignTeamLeadSaga)
    yield takeLatest('fieldAgentReducers/FetchAllFieldAgentForPermissionRequest', fetchFieldAgentPerPermissionSaga)
    yield takeLatest('fieldAgentReducers/UpdateFieldAgentsPermissionsRequest', updateFieldAgentPermissionSaga)
};