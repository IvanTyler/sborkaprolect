import { IBasket, IProducts } from "../Interfaces/interface";

export interface IGetData {
    products: IProducts[];
    basket: IBasket[];
    error: null | string;
}

export const initState: IGetData = {
    products: [],
    basket: [],
    error: '',
}