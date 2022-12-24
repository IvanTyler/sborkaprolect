import { IBasket, IProducts } from "../Interfaces/interface";

export interface IGetData {
    products: IProducts[];
    basket: IBasket[];
    openSidebarBasket: boolean;
    error: null | string;
}

export const initState: IGetData = {
    products: [],
    basket: [],
    openSidebarBasket: true,
    error: '',
}