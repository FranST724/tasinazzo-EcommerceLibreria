import { useEffect } from "react"

const ItemListContainer = ({greeting}) => {
    return (
        <h2>{greeting}</h2>
    )
}

const ComponentePromesas = () => {
    const [producto, setProduct] = useState([])
    const [loading, setLoading] = useState (true)

    useEffect (() => {
        getFetch
        .then( res => {
            console.log('llamada a api')
            setProduct(res)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])
}

export default ItemListContainer
export default ComponentePromesas