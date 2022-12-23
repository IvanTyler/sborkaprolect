import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from '../../Container/Container'
import { ListProducts } from '../../ListProducts/ListProducts'
import { ProductDetailPage } from '../ProductDetailPage/ProductDetailPage'
import style from './Products.module.scss'

export const Products: FC = () => {
    return (
        <section className={style.sectionProducts}>
            <Container container={style.containerProducts}>
                <Routes>
                    <Route path='/' element={<ListProducts />} />
                    <Route path='/:idProduct' element={<ProductDetailPage />} />
                </Routes>
            </Container>
        </section>
    )
}