import { FC } from "react"
import style from './Sandwitch.module.scss'

interface sandwitchProps {
    openBasket: () => void
}

export const Sandwitch: FC<sandwitchProps> = ({ openBasket }) => {
    return (
        <ul className={style.sandwitch} onClick={() => openBasket()}>
            <li className={style.sandwitch__item}></li>
            <li className={style.sandwitch__item}></li>
            <li className={style.sandwitch__item}></li>
        </ul>
    )
}