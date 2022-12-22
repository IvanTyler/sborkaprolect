import { IGetData, initState } from "../initState";
import { getDataActionType, GetDataActionTypesEnum } from "../Types/getDataTypes";


export const getDataReducer = (state = initState, action: getDataActionType): IGetData => {
    switch (action.type) {
        case GetDataActionTypesEnum.GET_DATA_GOODS:
            return { ...state, products: action.payload }
        case GetDataActionTypesEnum.GET_DATA_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}