import { IBasket } from "../../Interfaces/interface";
import { IGetData, initState } from "../initState";
import { deleteProductActionTypesEnum, GetDataActionTypesEnum, IncrementDecrementActionTypesEnum } from "../Types/enums";
import { getDataActionType } from "../Types/getDataTypes";

export const basketReducer = (state = initState, action: getDataActionType): IGetData => {
    switch (action.type) {
        case GetDataActionTypesEnum.GET_PRODUCT:
            return { ...state, basket: [...state.basket, action.product] }
        case IncrementDecrementActionTypesEnum.INCREMENT:
            return {
                ...state, basket: state.basket.map((el: IBasket) => {
                    if (el.id === action.id) {
                        return {
                            ...el,
                            count: action.count,
                            price: action.price,
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
                            count: action.count,
                            price: action.price,
                        }
                    }
                    return el
                })
            }
        case deleteProductActionTypesEnum.DELETE_PRODUCT:
            return { ...state, basket: state.basket.filter((el: IBasket) => el.id !== action.id) }
        default:
            return state
    }
}