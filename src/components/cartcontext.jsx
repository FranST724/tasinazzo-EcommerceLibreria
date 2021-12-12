import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useCartContext(CartContext);

function CacheProvider({ defaultValue = [], children }) {
	const [ lista, setLista ] = useState(defaultValue);

	const listaSize = lista.reduce((acum, prod) => acum + prod.quantity, 0);

	function addMoreItems(id) {
		const nuevaLista = [ ...lista ];
		for (let index = 0; index < nuevaLista.length; index++) {
			console.log(nuevaLista[index]);
			if (nuevaLista[index].id === id && nuevaLista[index].quantity < nuevaLista[index].stock) {
				nuevaLista[index] = { ...nuevaLista[index], quantity: nuevaLista[index].quantity + 1 };
			}
		}
		setLista(nuevaLista);
	}

	function getFromLista(id) {
		return lista.find((obj) => obj.id === id);
	}

	function isOnLista(obj, lista) {
		return lista.map((item) => item.id).includes(obj.id);
	}

	function addToLista(obj) {
		if (!isOnLista(obj, lista)) {
			setLista([ ...lista, obj ]);
		} else {
			alert('Ya existe el item lista');
		}
	}

	const precioTotal = () => {
		return lista.reduce((acum, prod) => acum + prod.quantity * prod.price, 0);
	};

	const borrarItem = (id) => {
		setLista(lista.filter((prod) => prod.id !== id));
	};

	const borrarElCarrito = () => {
		setLista([]);
	};

	return (
		<CartContext.Provider
			value={{
				lista,
				addToLista,
				listaSize,
				precioTotal,
				borrarElCarrito,
				borrarItem
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CacheProvider;
