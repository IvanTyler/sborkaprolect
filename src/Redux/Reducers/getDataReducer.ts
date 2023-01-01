import { IGetData, initState } from "../initState";
import { GetDataActionTypesEnum, getDetailProductBasketActionEnum, openSidebarBasketActionEnum } from "../Types/enums";
import { getDataActionType } from "../Types/getDataTypes";

export const getDataReducer = (state = initState, action: getDataActionType): IGetData => {
    switch (action.type) {
        case GetDataActionTypesEnum.GET_DATA_GOODS:
            return { ...state, products: action.payload }
        case GetDataActionTypesEnum.GET_DATA_ERROR:
            return { ...state, error: action.payload }
        case getDetailProductBasketActionEnum.GET_DETAIL_PRODUCT:
            return { ...state, detailProduct: action.product }
        case openSidebarBasketActionEnum.OPEN_SIDEBAR:
            return { ...state, openSidebarBasket: action.open }
        default:
            return state
    }
}