import { FC } from 'react'
import { Basket } from '../Basket/Basket'
import { Container } from '../Container/Container'
import { Products } from '../Products/Products'
import style from './Main.module.scss'

export const Main: FC = () => {
    return (
        <main className={style.main}>
            <Container container={style.mainContainer}>
                <Products />
                <Basket />
            </Container>
        </main>
    )
}