import { createSlice } from "@reduxjs/toolkit";
import { FieldAgentState } from '../../../types/fieldAgentTypes'


const initialState: FieldAgentState = {
    fieldAgent: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        type: "",
        img: "",
        permissions: [],
        serviceProviderId: "",
        teamMembers: [],
        agentPermission:[]
    },
    error: null,
    type: '',
    fieldAgentPermissionData:{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        type: "",
        img: "",
        permissions: [],
        serviceProviderId: "",
        teamMembers: [],
        agentPermission:[]
    },
    updateSuccess:false,
    assignSuccess: false,
};

const FiledAgentReducer = createSlice({
    name: "fieldAgentReducers",
    initialState,
    reducers: {
        // Fetch all Field Agents
        FetchFieldAgentRequest: (state, { payload, type }) => {
            state.type = type;
        },
        FetchFieldAgentRequestSuccess: (state, { payload, type }) => {
            state.type = type;
            state.fieldAgent = payload?.data[0];
        },
        FetchFieldAgentRequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Add Field Agent
        AddFieldAgentRequest: (state, { payload, type }) => {
            state.type = type;
        },
        AddFieldAgentRequestSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        AddFieldAgentRequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
        // update Field Agent
        updateFieldAgentRequest: (state, { payload, type }) => {
            state.type = type;
        },
        updateFieldAgentRequestSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        updateFieldAgentRequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        //update field agent role
        updateFieldAgentRoleRequest: (state, { payload, type }) => {
            state.type = type;
        },
        updateFieldAgentRequestRoleSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        updateFieldAgentRequestRoleFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        //Assign Team Lead
        assaaignTeamLeadRequest: (state, { payload, type }) => {
            state.type = type;
        },
        assaaignTeamLeadSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        assaaignTeamLeadFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Fetch all Field Agents
        FetchAllFieldAgentRequest: (state, { payload, type }) => {
            state.type = type;
        },
        FetchAllFieldAgentRequestSuccess: (state, { payload, type }) => {
            state.type = type;
            state.fieldAgent = payload?.data[0];
        },
        FetchAllFieldAgentRequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
        //Fetch field agents for agent permission
        FetchAllFieldAgentForPermissionRequest: (state, { payload, type }) => {
            state.type = type;
        },
        FetchAllFieldAgentForPermissionRequestSuccess: (state, { payload, type }) => {
            state.type = type;
            state.fieldAgentPermissionData = payload?.data[0];
        },
        FetchAllFieldAgentForPermissionRequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
        //update field agent permissions
        UpdateFieldAgentsPermissionsRequest: (state, { payload, type }) => {
            state.type = type;
            state.updateSuccess = false
        },
        UpdateFieldAgentsPermissionsRequestSuccess: (state, { payload, type }) => {
            state.type = type;
            state.updateSuccess = true;
        },
        UpdateFieldAgentsPermissionsRequestFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
            state.updateSuccess = false
        },
    }
});

export const {
    FetchFieldAgentRequest,
    FetchFieldAgentRequestSuccess,
    FetchFieldAgentRequestFailure,

    AddFieldAgentRequest,
    AddFieldAgentRequestSuccess,
    AddFieldAgentRequestFailure,

    updateFieldAgentRequest,
    updateFieldAgentRequestSuccess,
    updateFieldAgentRequestFailure,

    updateFieldAgentRoleRequest,
    updateFieldAgentRequestRoleSuccess,
    updateFieldAgentRequestRoleFailure,

    assaaignTeamLeadRequest,
    assaaignTeamLeadSuccess,
    assaaignTeamLeadFailure,

    FetchAllFieldAgentForPermissionRequest,
    FetchAllFieldAgentForPermissionRequestSuccess,
    FetchAllFieldAgentForPermissionRequestFailure,

    UpdateFieldAgentsPermissionsRequest,
    UpdateFieldAgentsPermissionsRequestFailure,
    UpdateFieldAgentsPermissionsRequestSuccess
} = FiledAgentReducer.actions;

export default FiledAgentReducer.reducer;