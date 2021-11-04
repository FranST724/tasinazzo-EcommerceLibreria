import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import getFetch from './getFetch'

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {

        if (categoryId) {
        getFetch
        .then( res => {
            console.log(res)
            setProductos(res.filter(prod => prod.categoria === categoryId))
        })
        .catch(err => alert('Error',err))
        } 

        else {
        getFetch
        .then( res => {
            console.log(res)
            setProductos(res)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        }
       },[categoryId])

    console.log(productos);

    return (
        <div>
        <h2>{greeting}</h2>
        { loading ? <h2>Cargando...</h2>:
        <ItemList productos={productos}/>}
        </div>

    )
}

export default ItemListContainer