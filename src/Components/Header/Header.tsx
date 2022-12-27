import { FC } from "react";
import { Container } from "../Container/Container";
import style from './Header.module.scss'

import logo from '../../assets/images/common/logo.svg'
import basketIcon from '../../assets/images/common/basket.svg'
import { Link } from "react-router-dom";
import { Sandwitch } from "../Sandwitch/Sandwitch";
import { useGetData } from "../../Hooks/useGetData";
import { IBasket } from "../../Interfaces/interface";
import { useDispatch } from "react-redux";
import { openSidebarBasketFunc } from "../../Redux/Action/dataAction";

export const Header: FC = () => {

    const dispath = useDispatch()

    const { basket, openSidebarBasket } = useGetData()

    const countProducts = basket.reduce((acc: number, curr: IBasket) => acc + curr.count, 0)

    const openBasket = () => dispath(openSidebarBasketFunc(false))

    return (
        <header className={style.header}>
            <Container container={style.containerHeader}>
                <Link to="/" className={style.header__link}>
                    <img src={logo} alt="logo" className={style.header__iconLogo} />
                </Link>

                <div className={style.header__right}>
                    <div className={style.header__bascket}>
                        <span className={style.header__basketCount}>{countProducts}</span>
                        <img src={basketIcon} alt="basket" className={style.header__iconBasket} />
                    </div>
                    {openSidebarBasket && <Sandwitch openBasket={openBasket} />}
                </div>
            </Container>
        </header>
    )
}