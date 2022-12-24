import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getDataFetch } from "../Redux/Action/dataAction"
import { useTypeSelector } from "./useTypeSelector"

export const useGetData = () => {
    const dispath = useDispatch<any>()

    useEffect(() => {
        dispath(getDataFetch())
    }, [])

    const { products, basket, openSidebarBasket } = useTypeSelector(state => state.data)

    return { products, basket, openSidebarBasket }
}