import ItemCount from './ItemCount';

const ItemDetail = ({detail}) => {
    const funcion = (param) => {
        console.log (param)
    }
    
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
            <ItemCount stock={detail.stock} initial={1} onAdd={funcion}/>
        </div>
    </div>)
    )
}

export default ItemDetail