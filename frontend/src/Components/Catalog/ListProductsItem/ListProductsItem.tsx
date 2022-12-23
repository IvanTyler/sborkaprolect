import { FC } from 'react'
import { Link } from 'react-router-dom'
import { BACKEND_HOST } from '../../../Constants/constants'
import { IBasket, IProducts } from '../../../Interfaces/interface'
import style from './ListProductsItem.module.scss'
import addToBasketIcon from '../../../assets/images/common/basketWhite.svg'
import { useGetData } from '../../../Hooks/useGetData'
import { useDispatch } from 'react-redux'
import { getIDProduct } from '../../../Redux/Action/dataAction'

interface itemProps {
    item: IProducts
}

export const ListProductsItem: FC<itemProps> = ({ item }) => {

    const dispatch = useDispatch()
    const { products } = useGetData()

    const findProduct = (id: number) => {
        const findProduct = products.find((el: IProducts) => el.id === id)

        const newProduct: IBasket = {
            id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
            count: 1,
            name: findProduct!.name,
            price: findProduct!.price,
            image: findProduct!.image.small,
        }

        dispatch(getIDProduct(newProduct))
    }

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
                    <button
                        className={style.listProductsItem__buttonAddToBasket}
                        onClick={() => findProduct(item.id)}
                    >
                        <img src={addToBasketIcon} alt="add to basket" className={style.header__iconBasket} />
                    </button>
                    <span className={style.listProductsItem__price}>
                        $ {item.price}
                    </span>
                </div>
            </div>
        </li>
    )
}