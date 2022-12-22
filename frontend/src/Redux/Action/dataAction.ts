import axios from "axios";
import { Dispatch } from "react";
import { BACKEND_HOST } from "../../Constants/constants";
import { IBasket, IProducts } from "../../Interfaces/interface";
import { deleteProductActionTypesEnum, getDataActionType, GetDataActionTypesEnum, IncrementDecrementActionTypesEnum } from "../Types/getDataTypes";

export const getDataFetch = () => {
    return async (dispath: Dispatch<getDataActionType>) => {
        const response = await axios.get<IProducts>(`${BACKEND_HOST}`)
        try {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_GOODS,
                payload: response.data,
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

export const incrementCountProduct = (id: string, price: number | undefined) => {
    return {
        type: IncrementDecrementActionTypesEnum.INCREMENT,
        id,
        price,
    }
}

export const decrementCountProduct = (id: string, price: number | undefined) => {
    return {
        type: IncrementDecrementActionTypesEnum.DECREMENT,
        id,
        price,
    }
}

export const deleteProductToBasket = (id: string) => {
    return {
        type: deleteProductActionTypesEnum.DELETE_PRODUCT,
        id,
    }
}