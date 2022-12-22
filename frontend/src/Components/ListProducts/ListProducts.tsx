import { FC } from 'react'
import { useGetData } from '../../Hooks/useGetData'
import { IProducts } from '../../Interfaces/interface'
import { ListProductsItem } from '../ListProductsItem/ListProductsItem'
import List from '../List/List'
import style from './ListProducts.module.scss'

export const ListProducts: FC = () => {

    const { products } = useGetData()

    return (
        <ul className={style.listProducts}>
            <List
                items={products}
                renderItem={(item: IProducts) => <ListProductsItem item={item} key={item.id} />}
            />
        </ul>
    )
}