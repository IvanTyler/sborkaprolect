
interface listProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

function List<T>(props: listProps<T>) {
    return (
        <>
            {props.items.map(props.renderItem)}
        </>
    )
}

export default List