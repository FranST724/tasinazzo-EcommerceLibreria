import { CartContext } from './cartcontext';
import { useContext } from 'react';
import { getFirestore } from '../firebase';
import firebase from 'firebase';

const Cart = () => {
	const { lista, precioTotal, borrarElCarrito, listaSize } = useContext(CartContext);

	const finalizarCompra = () => {
		const db = getFirestore();
		const ordersCollection = db.collection('orders');

		const newOrder = {
			buyer: { name: 'name', phone: '00 0000 0000', email: 'randomUser@gmail.com' },
			items: lista,
			date: firebase.firestore.Timestamp.fromDate(new Date()),
			total: precioTotal()
		};
		ordersCollection
			.add(newOrder)
			.then((id) => {
				alert('Compra finalizada, el id es: ', id);
			})
			.catch((error) => {
				console.log('Error searching items', error);
			})
			.finally(() => {
				console.log('Done!');
			});
		alert('Compra finalizada');
	};

	return (
		<div>
			<h2>Carrito</h2>
			{listaSize > 0 ? (
				<div>
					{lista.map((prod) => (
						<div>
							<li>
								{prod.name}
								<p>Cantidad: {prod.quantity}</p>
							</li>
						</div>
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
