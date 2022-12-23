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

export interface incrementCountProduct {
    type: IncrementDecrementActionTypesEnum.INCREMENT;
    id: number;
    count: number;
    price: number;
}

export interface decrementCountProduct {
    type: IncrementDecrementActionTypesEnum.DECREMENT;
    id: number;
    count: number;
    price: number;
}

export interface deleteProduct {
    type: deleteProductActionTypesEnum.DELETE_PRODUCT;
    id: number;
}

export type getDataActionType = GetDataAction
    | GetDataErrorAction
    | GetIdProductsAction
    | incrementCountProduct
    | decrementCountProduct
    | deleteProduct