import { IBasket, IProducts } from "../Interfaces/interface";

export interface IGetData {
    products: IProducts[];
    basket: IBasket[];
    detailProduct: IProducts;
    openSidebarBasket: boolean;
    error: null | string;
}

export const initState: IGetData = {
    products: [],
    basket: [],
    detailProduct: {
        id: 0,
        name: '',
        link: '',
        price: 0,
        modelNumber: '',
        itemInCart: false,
        image: {
            small: '',
            big: '',
        }
    },
    openSidebarBasket: true,
    error: '',
}