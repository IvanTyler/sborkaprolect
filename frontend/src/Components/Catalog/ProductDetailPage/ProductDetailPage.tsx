import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetData } from '../../../Hooks/useGetData';
import { IProducts } from '../../../Interfaces/interface';
import style from './ProductDetailPage.module.scss'

import addToBasketIcon from '../../../assets/images/common/basketWhite.svg'
import { useAddProductToBasket } from '../Common/Hooks/useAddProductToBasket';

export const ProductDetailPage: FC = () => {

    const { findProductFunc } = useAddProductToBasket()

    let { idProduct } = useParams()
    const { products } = useGetData()

    useEffect(() => { }, [idProduct])

    const findProduct = products.find((el: IProducts) => el.id === Number(idProduct))

    return (
        <section className={style.sectionProductDetailPage}>
            <Link to='/' className={style.sectionProductDetailPage__linkBackInCatalog}>
                back in catalog
            </Link>
            <figure className={style.sectionProductDetailPage__figure}>
                <div className={style.sectionProductDetailPage__wrapperImg}>
                    <img
                        className={style.sectionProductDetailPage__img}
                        src={findProduct?.image.big}
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
                    onClick={() => findProductFunc(Number(idProduct))}
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
