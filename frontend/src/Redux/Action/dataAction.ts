import { Dispatch } from "react";
import { IBasket } from "../../Interfaces/interface";
import { mockData } from "../../MockData/MockData";
import { deleteProductActionTypesEnum, GetDataActionTypesEnum, IncrementDecrementActionTypesEnum, openSidebarBasketActionEnum } from "../Types/enums";
import { getDataActionType } from "../Types/getDataTypes";

export const getDataFetch = () => {
    return async (dispath: Dispatch<getDataActionType>) => {
        const response = mockData
        try {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_GOODS,
                payload: response,
            })
        } catch (e) {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_ERROR,
                payload: 'Ошибка, данных нет',
            })
        }
    }
}

export const getIDProduct = (product: IBasket) => {
    return {
        type: GetDataActionTypesEnum.GET_PRODUCT,
        product,
    }
}

export const incrementCountProduct = (id: number, count: number | undefined, price: number | undefined) => {
    return {
        type: IncrementDecrementActionTypesEnum.INCREMENT,
        id,
        count,
        price,
    }
}

export const decrementCountProduct = (id: number, count: number | undefined, price: number | undefined) => {
    return {
        type: IncrementDecrementActionTypesEnum.DECREMENT,
        id,
        count,
        price,
    }
}

export const deleteProductToBasket = (id: number) => {
    return {
        type: deleteProductActionTypesEnum.DELETE_PRODUCT,
        id,
    }
}

export const openSidebarBasketFunc = (open: boolean) => {
    return {
        type: openSidebarBasketActionEnum.OPEN_SIDEBAR,
        open,
    }
}