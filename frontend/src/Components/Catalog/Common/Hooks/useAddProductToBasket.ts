import { useDispatch } from "react-redux"
import { useGetData } from "../../../../Hooks/useGetData"
import { IBasket, IProducts } from "../../../../Interfaces/interface"
import { getIDProduct } from "../../../../Redux/Action/dataAction"

export const useAddProductToBasket = () => {

    const dispatch = useDispatch()

    const { products } = useGetData()

    const findProductFunc = (id: number) => {
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

    return { findProductFunc }
}