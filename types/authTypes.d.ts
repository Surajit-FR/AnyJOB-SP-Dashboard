import { AdditionalInfo, UserAddress } from "./userTypes";

export type TCredentials = {
    email: string,
    password: string,
    userType?: Array<string>
};

export type TLoginCredentials = TCredentials & {};

export type TRegisterCredentials = TCredentials & {
    firstName: string,
    lastName: string,
};

export type User = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string;
    isVerified: boolean;
    userType: string;
    createdAt: string;
    updatedAt: string;
    additionalInfo: Array<AdditionalInfo>;
    userAddress: Array<UserAddress>;
    _id? : string;
    totalFieldAgent?: string;
    totalCompletedServices?: string;
    totalNewServices?: string;
};

export type UserData = {
    user: User,
    accessToken?: string,
    refreshToken?: string,
};