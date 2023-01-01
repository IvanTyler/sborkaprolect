import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getDataFetch } from "../Redux/Action/dataAction"
import { useTypeSelector } from "./useTypeSelector"

export const useGetData = () => {
    const dispath = useDispatch<any>()

    useEffect(() => {
        dispath(getDataFetch())
    }, [])

    const { products, openSidebarBasket, detailProduct } = useTypeSelector(state => state.data)
    const { basket } = useTypeSelector(state => state.basket)


    return { products, basket, openSidebarBasket, detailProduct }
}