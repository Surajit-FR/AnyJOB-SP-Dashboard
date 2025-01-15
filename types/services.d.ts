export type ShiftTime = {
    shiftId: string;
    shiftTimeId: string;
};

export type DerivedAnswer = {
    derivedAnswers: Array<DerivedAnswer>; // Recursive structure for derived answers
    option: string;
    answer: string;
    _id: string;
};

export type Answer = {
    answer: string;
    selectedOption: string;
    derivedAnswers: Array<DerivedAnswer>;
    _id: string;
};

export type OtherInfo = {
    productSerialNumber: string;
    serviceDescription: string;
    _id: string;
};

export type ServiceRequest = {
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
    serviceStartDate: string | Date;
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
    customerPhone?: string
    customerName?: string
    totalRatings?: number
    userAvgRating?: number
    categoryName?: string
    userAvtar?: string
    serviceRequests?: any
    distance?: number
};

export type ServiceUpdateResponse = {
    updatedService: ServiceRequest;
    totalExecutionTime: number;
};