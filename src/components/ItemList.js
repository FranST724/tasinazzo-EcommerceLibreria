import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <div> {
            productos.map(prod=> { return <Item prod={prod}/>})} 
        </div>
    )
}

export default ItemList
