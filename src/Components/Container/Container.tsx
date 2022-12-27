import React from "react";
import style from './Container.module.scss'

interface ContainerProps {
    children: React.ReactNode
    container?: string
}

export const Container: React.FC<ContainerProps> = ({ children, container }) => {
    return (
        <div className={style.container + ' ' + container}>
            {children}
        </div>
    )
}