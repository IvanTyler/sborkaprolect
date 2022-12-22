export interface IProducts {
    id: string;
    name: string;
    link: string;
    price: number;
    image: IImages;
}

export interface IImages {
    small: string;
    big: string;
}

export interface IBasket {
    id: string;
    count: number;
    name: string;
    price: number;
    image: string;
}