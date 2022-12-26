import { FC } from 'react';
import { IBasket } from '../../Interfaces/interface';
import { BACKEND_HOST } from '../../Constants/constants';

import style from './ListBasketProductsItem.module.scss'

import iconDecrementProduct from '../../assets/images/common/decrementQuantityGoods.svg'
import iconIncrementProduct from '../../assets/images/common/incrementQuantityGoods.svg'
import deleteProduct from '../../assets/images/common/deleteProduct.svg'
import { useDispatch } from 'react-redux';
import { decrementCountProduct, deleteProductToBasket, incrementCountProduct } from '../../Redux/Action/dataAction';
import { useGetData } from '../../Hooks/useGetData';

interface itemProps {
    item: IBasket
}

export const ListBasketProductsItem: FC<itemProps> = ({ item }) => {

    const dispath = useDispatch()

    const { products, basket } = useGetData()

    const findPrice = (name: string) => products.find((el: any) => el.name === name)

    const countingQuantitypriceProducts = (id: number, name: string) => {
        const price: number | undefined = findPrice(name)?.price

        let count: number | undefined = basket.find((el: IBasket) => el.id === id)?.count
        let priceBasketProduct: number | undefined = basket.find((el: IBasket) => el.id === id)?.price

        return { count, priceBasketProduct, price }
    }

    const increaseCountProduct = (id: number, name: string) => {

        let { count, priceBasketProduct, price } = countingQuantitypriceProducts(id, name)

        const sumCountProduct = count! += 1;
        const sumPriceProduct = priceBasketProduct! += price!;
        dispath(incrementCountProduct(id, sumCountProduct, sumPriceProduct))
    }

    const decreaseCountProduct = (id: number, name: string) => {

        let { count, priceBasketProduct, price } = countingQuantitypriceProducts(id, name)

        if (count! > 1) {
            const sumCountProduct = count! -= 1;
            const sumPriceProduct = priceBasketProduct! -= price!;
            dispath(decrementCountProduct(id, sumCountProduct, sumPriceProduct))
        }
    }

    const deleteProductToBaset = (id: number) => dispath(deleteProductToBasket(id))

    return (
        <li className={style.listBasketProductsItem}>
            <div className={style.listBasketProductsItem__basket}>
                <img className={style.listBasketProductsItem__img} src={`${BACKEND_HOST}${item.image}`} alt={item.name} />
                <div className={style.listBasketProductsItem__description}>
                    <h3 className={style.listBasketProductsItem__title}>
                        {item.name}
                    </h3>
                    <div className={style.listBasketProductsItem__addDeleteCountProduct}>
                        <img
                            className={item.count > 1 ?
                                style.listBasketProductsItem__iconDecrease :
                                style.listBasketProductsItem__iconDecrease + ' ' +
                                style.listBasketProductsItem__iconDecreaseOpacity
                            }
                            onClick={() => decreaseCountProduct(item.id, item.name)}
                            src={iconDecrementProduct} alt="уменьшить количество товара"
                        />
                        <span className={style.listBasketProductsItem__count}>
                            {item.count}
                        </span>
                        <img
                            className={style.listBasketProductsItem__iconIncrease}
                            src={iconIncrementProduct} alt="увеличить количество товара"
                            onClick={() => increaseCountProduct(item.id, item.name)}
                        />
                        <span className={style.listBasketProductsItem__price}>
                            {item.price}
                        </span>
                    </div>
                    <img
                        onClick={() => deleteProductToBaset(item.id)}
                        className={style.listBasketProductsItem__iconDeleteProduct}
                        src={deleteProduct} alt="delete-product"
                    />
                </div>
            </div>
        </li>
    )
}