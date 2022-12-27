import { FC } from 'react'
import { useGetData } from '../../Hooks/useGetData'
import { IBasket } from '../../Interfaces/interface'
import style from './Total.module.scss'

export const Total: FC = () => {

    const { basket } = useGetData()

    const tax = 100
    const shipping = 150
    const subTotal = basket.reduce((acc: number, curr: IBasket) => acc + curr.price, 0)
    const total = subTotal + tax + shipping

    return (
        <section className={style.sectionTotal}>
            <ul className={style.sectionTotal__list}>
                <li className={style.sectionTotal__item}>
                    <span className={style.sectionTotal__title}>Subtotal</span>
                    <span className={style.sectionTotal__price}>$ {subTotal}</span>
                </li>
                <li className={style.sectionTotal__item}>
                    <span className={style.sectionTotal__title}>Tax</span>
                    <span className={style.sectionTotal__price}>$ {tax}</span>
                </li>
                <li className={style.sectionTotal__item}>
                    <span className={style.sectionTotal__title}>Shipping</span>
                    <span className={style.sectionTotal__price}>$ {shipping}</span>
                </li>
                <li className={style.sectionTotal__item}>
                    <span className={style.sectionTotal__title}>Total</span>
                    <span className={style.sectionTotal__price}>$ {subTotal === 0 ? 0 : total}</span>
                </li>
            </ul>
        </section>
    )
}