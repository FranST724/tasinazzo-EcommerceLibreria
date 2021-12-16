import { CartContext } from './cartcontext';
import { useContext } from 'react';
import { getFirestore } from '../firebase';
import firebase from 'firebase';
import { useState } from 'react';

const Cart = () => {
	const [ formData, setFormData ] = useState({
		name: '',
		phone: '',
		email: ''
	});

	const handleChange = (userInfo) => {
		const newUserInfo = { ...formData };
		newUserInfo[`${userInfo.target.name}`] = userInfo.target.value;
		setFormData(newUserInfo);
	};

	const { lista, precioTotal, borrarElCarrito, listaSize } = useContext(CartContext);

	const finalizarCompra = (e) => {
		const db = getFirestore();
		const ordersCollection = db.collection('orders');

		console.log(formData);
		const newOrder = {
			buyer: formData,
			items: lista,
			date: firebase.firestore.Timestamp.fromDate(new Date()),
			total: precioTotal()
		};
		ordersCollection
			.add(newOrder)
			.then((response) => {
				console.log(response.id);
				alert(`Compra finalizada, el ID es: ${response.id}`);
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
								<img src={prod.foto} />
								{prod.name}
								<p>Cantidad: {prod.quantity}</p>
							</li>
						</div>
					))}
					{`Precio total: ${precioTotal()}`}
					<button onClick={() => borrarElCarrito()}>borrar el carrito</button>

					<form onSubmit={finalizarCompra} onChange={handleChange}>
						<input type="text" name="name" placeholder="name" value={formData.name} />
						<input type="text" name="phone" placeholder="tel" value={formData.phone} />
						<input type="email" name="email" placeholder="email" value={formData.email} />
					</form>

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
