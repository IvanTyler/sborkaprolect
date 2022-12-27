import { FC } from 'react'
import { useGetData } from '../../Hooks/useGetData'
import { ListBasketProducts } from '../ListBasketProducts/ListBasketProducts'
import { Total } from '../Total/Total'
import style from './Basket.module.scss'
import closeBasketIcon from '../../assets/images/common/closeBasket.svg'
import { openSidebarBasketFunc } from '../../Redux/Action/dataAction'
import { useDispatch } from 'react-redux'

export const Basket: FC = () => {

    const { basket, openSidebarBasket } = useGetData()
    
    const dispath = useDispatch()

    const openBasket = () => dispath(openSidebarBasketFunc(true))

    return (
        <section className={
            !openSidebarBasket ? style.sectionBasket + ' ' + style.openSidebar :
                style.sectionBasket
        }>
            <div className={style.sectionBasket__basket}>
                <img
                    src={closeBasketIcon}
                    alt="закрыть корзину"
                    className={style.sectionBasket__closeBasketIcon}
                    onClick={() => openBasket()}
                />
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
