import axios from "axios";
import { REACT_APP_BASE_URL } from "../../config/app.config";
import { TLoginCredentials } from "../../../types/authTypes";
import { addFieldAgent } from "../../../types/fieldAgentTypes";
import { setupInterceptors } from "./interceptor";

// Create axios instance
export const API = axios.create({ baseURL: REACT_APP_BASE_URL, withCredentials: true });

// Set up interceptors
setupInterceptors();

// Login
export const LOGIN = (data: TLoginCredentials) => API.post("/auth/signin", data);
// Logout
export const LOGOUT = () => API.post("/auth/logout");
// Fetch nearby service requests
export const FETCHNEARBYSERVICEREQ = (data?: string) => {
    const queryString = new URLSearchParams();
    queryString.append('query', "");
    return API.get(`/service/nearby-services-request?${queryString.toString()}`);
}
// Handle service req
export const HANDLESERVICEREQ = (serviceId: string, data: { isReqAcceptedByServiceProvider: boolean, requestProgress: string }) => API.patch(`/service/c/${serviceId}`, data);
// Get accepted service request
export const GETACCEPTEDSERVICEREQ = () => API.get("/service/get-accepted-service-request");
// export const GETALLFIELDAGENTS = (serviceProviderId: string) => API.get(`user/get-associates/${serviceProviderId}`);
export const GETALLFIELDAGENTS = (serviceProviderId: string) => API.get(`/user/get-agent-engagement`);
//authorization error
export const ADDFIELDAGENTS = (data: addFieldAgent) => API.post("/auth/add-associate", data);
export const UPDATEFIELDAGENTPERMISSION = (data: { userId: string, acceptRequest: boolean, assignJob: boolean, fieldAgentManagement: boolean }) => API.post("/user/give-permission", data);

// team leaad assign
export const ASSIGNTEAMLEAD = (fieldAgentId: string) => API.post('/user/assign-teamlead', {fieldAgentId});
// export const ASSIGNTEAMLEAD = (fieldAgentId: string) => API.post('', fieldAgentId);
export const UPDATEFIELDAGENTROLE = (fieldAgentId: string) => API.post(`/auth/update-field-agent-role/${fieldAgentId}`);
//jobs
export const GETJOBDETAIL = (serviceId: string) => API.get(`/service/c/${serviceId}`);
export const GETSERVICEREQUESTBYTYPE = (servicetype: string) => API.post("user/fetch-job-by-status", { requestProgress: servicetype });
export const ASSIGNJOB = (data: { serviceId: string, assignedAgentId: string }) => API.patch('/service/assign-job', data);
//profile
export const GETPROFILEINFO = (userId: string) => API.get(`/user/u/${userId}`)
// export const GETALLQUESTIONS = (params: { categoryId?: string }) => {
//     const queryString = new URLSearchParams();
//     // Add categoryId only if it exists
//     if (params.categoryId) {
//         queryString.append('categoryId', params.categoryId);
//     }
//     return API.get(`/question?${queryString.toString()}`);
// };
//field agent permission
export const GETASSOSSIATESS = (providerId: string) => API.get(`/user/get-associates`)