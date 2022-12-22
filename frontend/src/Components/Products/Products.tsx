import { FC } from 'react'
import { Container } from '../Container/Container'
import { ListProducts } from '../ListProducts/ListProducts'
import style from './Products.module.scss'

export const Products: FC = () => {
    return (
        <section className={style.sectionProducts}>
            <Container container={style.containerProducts}>
                <ListProducts />
            </Container>
        </section>
    )
}