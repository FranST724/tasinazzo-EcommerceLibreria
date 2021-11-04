import {Link} from 'react-router-dom'
import ItemCount from './ItemCount'


const Item = ({prod}) => {
    
    return (<div className='card w-25 mt-5'>
        <Link to={`/producto/${prod.id}`}></Link>
        <div className='card-header'>
            {prod.name}
        </div>
        <div className='card-body'>
        {prod.autor}
        </div>
        <div className='card-body'>
            <img src={prod.foto}/>
        </div>
        <div className='card-body'>
            ${prod.price}
        </div>
        <div className='card-footer'>
            <Link to={`producto/${prod.id}`}><button className='btn btn-outline-primary btn-block'>Detalle del producto</button></Link>
            <ItemCount/>
        </div>
    </div>)
}

export default Item