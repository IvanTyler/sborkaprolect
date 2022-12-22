import axios from "axios";
import { Dispatch } from "react";
import { BACKEND_HOST } from "../../Constants/constants";
import { IProducts } from "../../Interfaces/interface";
import { getDataActionType, GetDataActionTypesEnum } from "../Types/getDataTypes";

export const getDataFetch = () => {
    return async (dispath: Dispatch<getDataActionType>) => {
        const response = await axios.get<IProducts>(`${BACKEND_HOST}`)
        try {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_GOODS,
                payload: response.data
            })
        } catch (e) {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_ERROR,
                payload: 'Ошибка, данных нет'
            })
        }
    }
}