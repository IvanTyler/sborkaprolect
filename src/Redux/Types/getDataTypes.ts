import { IBasket } from "../../Interfaces/interface";
import { deleteProductActionTypesEnum, GetDataActionTypesEnum, IncrementDecrementActionTypesEnum, openSidebarBasketActionEnum } from "./enums";

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