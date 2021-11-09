import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
	const [ count, setCounter ] = useState(initial);
    const canAdd = count <= stock
	const suma = () => {
			setCounter(count + 1);
	};

	const resta = () => {
		if (count > 1) {
			setCounter(count - 1);
		}
	};
	return (
		<div className='container-carrito'>
			<div className='añadir-carrito'>
				<button onClick={resta} className='btn btn-outline-primary btn-block'>-</button>
				<h3>{count}</h3>
				<button onClick={suma} className='btn btn-outline-primary btn-block'>+</button>
			</div>
			<div className='button-carrito'>
				<button onClick={() => onAdd(count)} disabled={!canAdd} className='btn btn-outline-primary btn-block custom-btn'>Agregar al carrito</button>
			</div>
		</div>
	);
};

export default ItemCount