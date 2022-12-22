import { IBasket } from "../../Interfaces/interface";
import { IGetData, initState } from "../initState";
import { deleteProductActionTypesEnum, getDataActionType, GetDataActionTypesEnum, IncrementDecrementActionTypesEnum } from "../Types/getDataTypes";

export const getDataReducer = (state = initState, action: getDataActionType): IGetData => {
    switch (action.type) {
        case GetDataActionTypesEnum.GET_DATA_GOODS:
            return { ...state, products: action.payload }
        case GetDataActionTypesEnum.GET_DATA_ERROR:
            return { ...state, error: action.payload }
        case GetDataActionTypesEnum.GET_PRODUCT:
            return { ...state, basket: [...state.basket, action.product] }
        case IncrementDecrementActionTypesEnum.INCREMENT:
            return {
                ...state, basket: state.basket.map((el: IBasket) => {
                    if (el.id === action.id) {
                        return {
                            ...el,
                            count: el.count += 1,
                            price: el.price += action.price
                        }
                    }
                    return el
                })
            }
        case IncrementDecrementActionTypesEnum.DECREMENT:
            return {
                ...state, basket: state.basket.map((el: IBasket) => {
                    if (el.id === action.id) {
                        return {
                            ...el,
                            count: el.count > 1 ? el.count -= 1 : el.count,
                            price: el.price > action.price ? el.price -= action.price : el.price
                        }
                    }
                    return el
                })
            }
        case deleteProductActionTypesEnum.DELETE_PRODUCT:
            return { ...state, basket: state.basket.filter((el: IBasket) => el.id !== action.id)}
        default:
            return state
    }
}