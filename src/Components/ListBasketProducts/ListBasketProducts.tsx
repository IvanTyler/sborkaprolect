import { FC } from 'react';
import { useGetData } from '../../Hooks/useGetData';
import { IBasket } from '../../Interfaces/interface';
import List from '../List/List';
import { ListBasketProductsItem } from '../ListBasketProductsItem/ListBasketProductsItem';
import style from './ListBasketProducts.module.scss'

export const ListBasketProducts: FC = () => {

    let { basket } = useGetData()

    return (
        <ul className={style.listBasketProducts}>
            <List
                items={basket}
                renderItem={(item: IBasket) => <ListBasketProductsItem item={item} key={item.id} />}
            />
        </ul>
    )
}