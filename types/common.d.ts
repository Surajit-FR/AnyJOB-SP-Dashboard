import { CallEffect, PutEffect, SelectEffect, TakeEffect } from "redux-saga/effects";
import { User, UserData } from "./authTypes";
import { ServiceRequest } from "./services";
import { IPData } from './ipstateTypes'

export type MenuItems = {
    title?: string;
    label?: string;
    to?: string;
    icon?: string;
    isSubmenu?: boolean;
    items?: Array<MenuItems>;
};

export type DataState = {
    authData?: Partial<UserData>,
    userData?: Partial<User>,
    serviceData?: Array<ServiceRequest>,
    acceptedServiceData?: Array<ServiceRequest>,
    fieldAgentData?: Array<ServiceRequest>,
    error: string | null,
    type: string,
    isServiceloading?: boolean
    serviceSuccess?: boolean
    totalServiceData?: number
    ipData?: IPData,
    userIpInfo?: IPData,
};

export type SagaGenerator<Y, R = void> = Generator<CallEffect<Y> | PutEffect | SelectEffect | TakeEffect, R, Y>;

export type CommonResponse = {
    statusCode: number,
    message: string,
    success: boolean,
};

export type ApiResponse<T> = CommonResponse & {
    data?: T;
};