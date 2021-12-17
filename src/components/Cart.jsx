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

	const finalizarCompra = () => {
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
			<h3 className="header-carrito">Carrito</h3>
			{listaSize > 0 ? (
				<div>
					{lista.map((prod) => (
						<div classname="card w-25 mt-5">
							<div className="card-body nameCart">Libro: {prod.name}</div>
							<img src={prod.foto} className="card-body" />
							<div className="card-body qtyCart">Cantidad: {prod.quantity}</div>
						</div>
					))}
					{`Precio total: ${precioTotal()}`}
					<button onClick={() => borrarElCarrito()} className="btn btn-outline-primary btn-block borrarCart">
						borrar el carrito
					</button>

					<h4 className="header-form">Formulario de confirmación de compra:</h4>
					<form onSubmit={finalizarCompra} onChange={handleChange} className="form-cart">
						<input type="text" name="name" placeholder="nombre" value={formData.name} />
						<input type="text" name="phone" placeholder="teléfono" value={formData.phone} />
						<input type="email" name="email" placeholder="email" value={formData.email} />
					</form>

					{listaSize > 0 && (
						<button
							onClick={() => finalizarCompra()}
							className="btn btn-outline-primary btn-block finalizarCart"
						>
							Finalizar compra
						</button>
					)}
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
