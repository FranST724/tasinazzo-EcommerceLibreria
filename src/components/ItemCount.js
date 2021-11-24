import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, initial, onAdd }) => {
	const [ count, setCount ] = useState(initial);
	const [ cambiarBoton, setCambiarBoton ] = useState(false);

	const suma = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const resta = () => {
		if (count > initial) {
			setCount(count - 1);
		}
	};

	const handlerOnAdd = () => {
		onAdd(count);
		setCount(initial);
		setCambiarBoton(true);
	};
	return (
		<div className="container-carrito">
			<div className="añadir-carrito">
				<button onClick={resta} className="btn btn-outline-primary btn-block">
					-
				</button>
				<h3>{count}</h3>
				<button onClick={suma} className="btn btn-outline-primary btn-block">
					+
				</button>
			</div>
			<div className="button-carrito">
				{cambiarBoton ? (
					<Link to="/cart">
						<button className="btn btn-outline-primary btn-block custom-btn">Terminar compra</button>
					</Link>
				) : (
					<button onClick={handlerOnAdd} className="btn btn-outline-primary btn-block custom-btn">
						Agregar al carrito
					</button>
				)}
			</div>
		</div>
	);
};

export default ItemCount;
