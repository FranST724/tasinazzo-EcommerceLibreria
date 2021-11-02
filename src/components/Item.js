const Item = ({prod}) => {
    return (<div key={prod.id} className='card w-25 mt-5'>
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
            {prod.price}
        </div>
        <div className='card-footer'>
            <button className='btn btn-outline-primary btn-block'>Detalle del producto</button>
        </div>
    </div>)
}

export default Item