import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {getFetch} from './getFetch'

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then( res => {
            console.log(res)
            setProductos(res)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])

    console.log(productos)

    return (
        <div>
        <h2>{greeting}</h2>
        { loading ? <h1>Cargando...</h1>:
        <ItemList productos={productos}/>}
        </div>

    )
}

export default ItemListContainer