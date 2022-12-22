export enum GetDataActionTypesEnum {
    GET_DATA_GOODS = 'GET_DATA_GOODS',
    GET_DATA_ERROR = 'GET_DATA_ERROR',
}

export interface GetDataAction {
    type: GetDataActionTypesEnum.GET_DATA_GOODS;
    payload: any;
}

export interface GetDataErrorAction {
    type: GetDataActionTypesEnum.GET_DATA_ERROR;
    payload: string;
}

export type getDataActionType = GetDataAction | GetDataErrorAction