import ItemCount from './ItemCount';
import React, { useState, useContext } from 'react';
import {CartContext} from './cartcontext'

const ItemDetail = ({detail}) => {
    const [count, setCount] = useState(0)
    const { lista, addToLista, listaSize} = useContext(CartContext)
    console.log(lista)

    const onAdd = (cant)=>{
        const nuevoLibro = {...detail, quantity: cant}
        addToLista(nuevoLibro)
        setCount(cant)
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
            <ItemCount stock={detail.stock} initial={1} onAdd={onAdd}/>
        </div>
    </div>)
    )
}

export default ItemDetail