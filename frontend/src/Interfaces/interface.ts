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