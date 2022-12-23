export interface IProducts {
    id: number;
    name: string;
    link: string;
    price: number;
    modelNumber: string;
    image: IImages;
}

export interface IImages {
    small: string;
    big: string;
}

export interface IBasket {
    id: number;
    count: number;
    name: string;
    price: number;
    image: string;
}