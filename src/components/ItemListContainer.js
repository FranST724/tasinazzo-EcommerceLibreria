import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import getFetch from './getFetch'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {

        if (categoryId) {
        getFetch
        .then( res => {
            console.log(res, categoryId)
            const datosFiltrados = res.filter(prod => prod.category === categoryId)
            console.log(datosFiltrados)
            setProductos(datosFiltrados)
        })
        .catch(err => alert('Error',err))
        .finally(()=> setLoading(false))
        } 

        else {
        getFetch
        .then( res => {
            setProductos(res)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        }
       },[categoryId])

    return (
        <div>
        { loading ? <h2>Cargando...</h2>:
        <ItemList productos={productos}/>}
        </div>

    )
}

export default ItemListContainer