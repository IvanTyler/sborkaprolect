import { FC } from 'react'
import { Link } from 'react-router-dom'
import { BACKEND_HOST } from '../../Constants/constants'
import { IProducts } from '../../Interfaces/interface'
import style from './ListProductsItem.module.scss'
import addToBasketIcon from '../../assets/images/common/basketWhite.svg'

interface itemProps {
    item: IProducts
}

export const ListProductsItem: FC<itemProps> = ({ item }) => {
    return (
        <li className={style.listProductsItem}>
            <div className={style.listProductsItem__wrapperImg}>
                <Link className={style.listProductsItem__link} to={`/${item.id}`}>
                    <img src={`${BACKEND_HOST}${item.image.small}`} alt={item.name} className={style.listProductsItem__icon} />
                </Link>
            </div>
            <div className={style.listProductsItem__description}>
                <h3 className={style.listProductsItem__title}>
                    <Link to={`/${item.id}`}>
                        {item.name}
                    </Link>
                </h3>
                <div className={style.listProductsItem__addToBasketPtoduct}>
                    <div className={style.listProductsItem__wrapperIconAddToBasket}>
                        <img src={addToBasketIcon} alt="add to basket" className={style.header__iconBasket} />
                    </div>
                    <span className={style.listProductsItem__price}>
                        $ {item.price}
                    </span>
                </div>
            </div>
        </li>
    )
}