import ItemCount from './ItemCount';
import React, { useState } from 'react';

const ItemDetail = ({detail}) => {
    const [count, setCount] = useState(0)
    const onAdd = (cant)=>{
        setCount(cant)
    }

    console.log(count)
    
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
            <ItemCount stock={detail.stock} initial={1} onAdd={onAdd}/>
        </div>
    </div>)
    )
}

export default ItemDetail