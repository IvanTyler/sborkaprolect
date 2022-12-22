import { FC } from "react"
import style from './Sandwitch.module.scss'

export const Sandwitch: FC = () => {
    return (
        <ul className={style.sandwitch}>
            <li className={style.sandwitch__item}></li>
            <li className={style.sandwitch__item}></li>
            <li className={style.sandwitch__item}></li>
        </ul>
    )
}