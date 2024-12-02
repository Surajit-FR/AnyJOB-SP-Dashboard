import { CallEffect, PutEffect, SelectEffect, TakeEffect } from "redux-saga/effects";
import { User, UserData } from "./authTypes";

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
    error: string | null,
    type: string,
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