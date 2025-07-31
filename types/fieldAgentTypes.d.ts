export type FieldAgentPermission = {
    acceptRequest: boolean
    assignJob: boolean
    fieldAgentManagement: true
    _id: string
}



export type addFieldAgent = {
    firstName: string
    lastName: string
    phone: string
    email: string
    type: string
    img?: string
    permissions?: string[]
    serviceProviderId?: string
    teamMembers: IteamMembers[]
    agentPermission: FieldAgentPermission[]
}
export type FieldAgentState = {
    fieldAgent: addFieldAgent
    error: string | null,
    type: string,
    fieldAgentPermissionData?: addFieldAgent
    updateSuccess?: boolean
    assignSuccess?: boolean
}

export type UpdateFieldAgent = {

}

export type FieldAgentRequest = {
    SelectedShiftTime: ShiftTime;
    startedAt: string | null;
    completedAt: string | null;
    isTipGiven: boolean;
    tipAmount: number;
    assignedAgentId: string | null;
    serviceProductImage: string;
    _id: string;
    categoryId: {
        _id: string;
        name: string;
        categoryImage: string;
    };
    subCategoryId?: string; // Optional as it's missing in some entries
    serviceStartDate: string;
    serviceShifftId: string;
    serviceZipCode: number;
    serviceLatitude: number;
    serviceLongitude: number;
    isIncentiveGiven: boolean;
    incentiveAmount: number;
    isApproved: string;
    isReqAcceptedByServiceProvider: boolean;
    serviceProviderId: string | null;
    answerArray: Array<Answer>;
    userId: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        avatar: string;
    };
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    requestProgress: string;
    otherInfo?: OtherInfo; // Optional as it's missing in some entries
    location?: {
        type: string;
        coordinates: [number, number];
    }; // Optional as it's missing in some entries
};

export type FieldAgentResponse = {
    fieldAgentService: FieldAgentRequest;
    totalExecutionTime: number;
};

export type TCategory = {
    _id: string;
    name: string;
    categoryImage?: string;
    owner: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
};
export type IFieldAgentPermission = {
    id: string;
    serviceProviderId: string;
    premission: string[];
}
export type IteamMembers = {
    email: string
    firstName: string
    lastName: string
    phone: string
    userType: string
    _id: string
    avatar?: string
    isEngaged?: boolean
}
export type TCategoryAPIResponse = {
    data: Array<addFieldAgent>;
}