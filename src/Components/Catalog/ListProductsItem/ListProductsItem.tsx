import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IProducts } from '../../../Interfaces/interface'
import style from './ListProductsItem.module.scss'
import addToBasketIcon from '../../../assets/images/common/basketWhite.svg'
import { useAddProductToBasket } from '../Common/Hooks/useAddProductToBasket'
import { useGetData } from '../../../Hooks/useGetData'

interface itemProps {
    item: IProducts
}

export const ListProductsItem: FC<itemProps> = ({ item }) => {

    const { findProductFunc } = useAddProductToBasket()
    const { basket } = useGetData()

    const isProductInBasket = basket.some((el: any) => el.name === item.name)

    return (
        <li className={style.listProductsItem}>
            <div className={style.listProductsItem__wrapperImg}>
                <Link className={style.listProductsItem__link} to={`/${item.id}`}>
                    <img src={item.image.small} alt={item.name} className={style.listProductsItem__icon} />
                </Link>
            </div>
            <div className={style.listProductsItem__description}>
                <h3 className={style.listProductsItem__title}>
                    <Link to={`/${item.id}`}>
                        {item.name}
                    </Link>
                </h3>
                <div className={style.listProductsItem__addToBasketPtoduct}>
                    <button
                        className={
                            isProductInBasket ?
                                style.listProductsItem__buttonAddToBasket + ' ' + style.listProductsItem__disable :
                                style.listProductsItem__buttonAddToBasket
                        }
                        onClick={() => findProductFunc(item.id)}
                        disabled={isProductInBasket ? !item.itemInCart : item.itemInCart}
                    >
                        <img src={addToBasketIcon} alt="add to basket" className={style.header__iconBasket} />
                    </button>
                    <span className={style.listProductsItem__price}>
                        $ {item.price} {item.itemInCart}
                    </span>
                </div>
            </div>
        </li>
    )
}