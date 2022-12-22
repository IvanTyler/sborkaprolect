import { FC, useEffect, useState } from "react";
import { Container } from "../Container/Container";
import style from './Header.module.scss'

import logo from '../../assets/images/common/logo.svg'
import basket from '../../assets/images/common/basket.svg'
import { Link } from "react-router-dom";
import { Sandwitch } from "../Sandwitch/Sandwitch";

export const Header: FC = () => {

    const [dimensions, setDimensions] = useState<number>(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleResize = () => setDimensions(prev => prev = window.innerWidth)

    return (
        <header className={style.header}>
            <Container container={style.containerHeader}>
                <Link to="/" className={style.header__link}>
                    <img src={logo} alt="logo" className={style.header__iconLogo} />
                </Link>

                <div className={style.header__right}>
                    <div className={style.header__bascket}>
                        <span className={style.header__basketCount}>2</span>
                        <img src={basket} alt="basket" className={style.header__iconBasket} />
                    </div>
                    {dimensions <= 1130 && <Sandwitch />}
                </div>
            </Container>
        </header>
    )
}