import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import getFetchDetail from './getFetchDetail'

const ItemDetailContainer = () => {

    const[detail, setDetail] = useState([])
    const {productId} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetchDetail
        .then( res => {
            console.log(res)
            setDetail(res.find(prod=> prod.id === productId))
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[productId])


    return (
        <div>
         { loading ? <h2>Cargando...</h2>: 
         <ItemDetail detail={detail}/>}
         </div>
    )
}

export default ItemDetailContainer