import { CartContext } from './cartcontext';
import { useContext } from 'react';

const Cart = () => {
	const { lista, precioTotal, borrarElCarrito, listaSize, addMoreItems } = useContext(CartContext);

	console.log(lista, 'hola');

	const finalizarCompra = () => {
		alert('Compra finalizada');
	};

	return (
		<div>
			<h2>Carrito</h2>
			{listaSize > 0 ? (
				<div>
					{lista.map((prod) => (
						<li>
							{prod.name} {prod.quantity}
							<button onClick={() => addMoreItems(prod.id)}>+</button>
						</li>
					))}
					{`Precio total: ${precioTotal()}`}
					<button onClick={() => borrarElCarrito()}>borrar el carrito</button>

					{listaSize > 0 && <button onClick={() => finalizarCompra()}>Finalizar compra</button>}
				</div>
			) : (
				<div>
					<p>El carrito está vacio</p>
				</div>
			)}
		</div>
	);
};

export default Cart;
