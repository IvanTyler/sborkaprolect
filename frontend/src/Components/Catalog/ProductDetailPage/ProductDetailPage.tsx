import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BACKEND_HOST } from '../../../Constants/constants';
import { useGetData } from '../../../Hooks/useGetData';
import { IBasket, IProducts } from '../../../Interfaces/interface';
import style from './ProductDetailPage.module.scss'

import addToBasketIcon from '../../../assets/images/common/basketWhite.svg'
import { useDispatch } from 'react-redux';
import { getIDProduct } from '../../../Redux/Action/dataAction';

export const ProductDetailPage: FC = () => {

    let { idProduct } = useParams()
    const { products } = useGetData()
    useEffect(() => { }, [idProduct])

    const findProduct = products.find((el: IProducts) => el.id === Number(idProduct))
    const dispatch = useDispatch()

    const addProductToBasket = () => {
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
        <section className={style.sectionProductDetailPage}>
            <Link to='/' className={style.sectionProductDetailPage__linkBackInCatalog}>
                back in catalog
            </Link>
            <figure className={style.sectionProductDetailPage__figure}>
                <div className={style.sectionProductDetailPage__wrapperImg}>
                    <img
                        className={style.sectionProductDetailPage__img}
                        src={`${BACKEND_HOST}/${findProduct?.image.big}`}
                        alt={findProduct?.name}
                    />
                </div>
                <figcaption className={style.sectionProductDetailPage__figcaption}>
                    <h2 className={style.sectionProductDetailPage__title}>{findProduct?.name}</h2>
                    <span className={style.sectionProductDetailPage__modelNumber}>item model number: {findProduct?.modelNumber}</span>
                </figcaption>
            </figure>
            <div className={style.sectionProductDetailPage__addToBasketPtoduct}>
                <button
                    onClick={() => addProductToBasket()}
                    className={style.sectionProductDetailPage__buttonAddToBasket}
                >
                    <img src={addToBasketIcon} alt="add to basket" className={style.header__iconBasket} />
                </button>
                <span className={style.sectionProductDetailPage__price}>
                    $ {findProduct?.price}
                </span>
            </div>
        </section>
    )
}
