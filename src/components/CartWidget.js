import iconoCarrito from '../assets/images/icons-cart.png';
import { CartContext } from './cartcontext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
	const { listaSize } = useContext(CartContext);

	console.log(listaSize);
	return listaSize > 0 ? (
		<Link to="/cart">
			<img src={iconoCarrito} className="carrito" />
			<p>{listaSize}</p>
		</Link>
	) : (
		<div />
	);
};

export default CartWidget;
