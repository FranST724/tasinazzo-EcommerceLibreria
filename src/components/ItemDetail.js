import ItemCount from './ItemCount';

const ItemDetail = ({detail}) => {
    return (
        (<div key={detail.id} className='card w-25 mt-5'>
        <div className='card-header'>
            {detail.name}
        </div>
        <div className='card-body'>
        {detail.autor}
        </div>
        <div className='card-body'>
            <img src={detail.foto}/>
        </div>
        <div className='card-body'>
            {detail.price}
        </div>
        <div className='card-footer'>
            <ItemCount stock={5} initial={1}/>
            <button className='btn btn-outline-primary btn-block'>Agregar al carrito</button>
        </div>
    </div>)
    )
}

export default ItemDetail