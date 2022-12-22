import { FC } from 'react'
import { useGetData } from '../../Hooks/useGetData'
import { ListBasketProducts } from '../ListBasketProducts/ListBasketProducts'
import { Total } from '../Total/Total'
import style from './Basket.module.scss'

export const Basket: FC = () => {

    const { basket } = useGetData()

    return (
        <section className={style.sectionBasket}>
            <div className={style.sectionBasket__basket}>
                <h2 className={style.sectionBasket__title}>My basket</h2>
                {basket.length ?
                    <ListBasketProducts /> :
                    <p className={style.sectionBasket__notProducts}>Ваша корзина пуста</p>
                }
            </div>
            <Total />
        </section>
    )
}