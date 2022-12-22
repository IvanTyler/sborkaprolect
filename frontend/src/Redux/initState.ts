import { IProducts } from "../Interfaces/interface";

export interface IGetData {
    products: IProducts[];
    error: null | string;
}

export const initState: IGetData = {
    products: [],
    error: '',
}