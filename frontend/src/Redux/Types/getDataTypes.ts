import { IBasket } from "../../Interfaces/interface";

export enum GetDataActionTypesEnum {
    GET_DATA_GOODS = 'GET_DATA_GOODS',
    GET_DATA_ERROR = 'GET_DATA_ERROR',
    GET_PRODUCT = 'GET_ID_PRODUCT',
}

export enum IncrementDecrementActionTypesEnum {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}

export enum deleteProductActionTypesEnum {
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    GET_DATA_SESSION_STORAGE = 'GET_DATA_SESSION_STORAGE',
}

export enum openSidebarBasketActionEnum {
    OPEN_SIDEBAR = 'OPEN_SIDEBAR',
}

export interface GetDataAction {
    type: GetDataActionTypesEnum.GET_DATA_GOODS;
    payload: any;
}

export interface GetDataErrorAction {
    type: GetDataActionTypesEnum.GET_DATA_ERROR;
    payload: string;
}

export interface GetIdProductsAction {
    type: GetDataActionTypesEnum.GET_PRODUCT;
    product: IBasket;
}

export interface GetSessionStorageBasketCount {
    type: deleteProductActionTypesEnum.GET_DATA_SESSION_STORAGE;
    product: IBasket;
}

export interface incrementCountProductAction {
    type: IncrementDecrementActionTypesEnum.INCREMENT;
    id: number;
    count: number;
    price: number;
}

export interface decrementCountProductAction {
    type: IncrementDecrementActionTypesEnum.DECREMENT;
    id: number;
    count: number;
    price: number;
}

export interface deleteProductAction {
    type: deleteProductActionTypesEnum.DELETE_PRODUCT;
    id: number;
}

export interface openSidebarBasketAction {
    type: openSidebarBasketActionEnum.OPEN_SIDEBAR;
    open: boolean;
}

export type getDataActionType = GetDataAction
    | GetDataErrorAction
    | GetIdProductsAction
    | incrementCountProductAction
    | decrementCountProductAction
    | deleteProductAction
    | openSidebarBasketAction