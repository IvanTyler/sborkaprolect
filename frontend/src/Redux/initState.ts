import { IBasket, IProducts } from "../Interfaces/interface";

export interface IGetData {
    products: IProducts[];
    basket: any[];
    openSidebarBasket: boolean;
    error: null | string;
}

export const initState: IGetData = {
    products: [],
    basket: [],
    openSidebarBasket: true,
    error: '',
}