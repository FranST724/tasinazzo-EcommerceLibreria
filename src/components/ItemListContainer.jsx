import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore } from '../firebase';

const ItemListContainer = () => {
	const [ productos, setProductos ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const { categoryId } = useParams();

	useEffect(
		() => {
			const db = getFirestore();
			let itemCollection = db.collection('items');
			let query = categoryId ? itemCollection.where('category', '==', categoryId) : itemCollection;

			console.log(query);
			query
				.get()
				.then((querySnapshot) => {
					if (querySnapshot.size === 0) {
						console.log('No Result!!');
					}
					const productList = querySnapshot.docs.map((doc) => ({
						...doc.data(),
						id: doc.data().n_id
					}));
					setProductos(productList);
				})
				.catch((error) => {
					console.log('Error searching items', error);
				})
				.finally(() => {
					setLoading(false);
				});
		},
		[ categoryId ]
	);

	return <div>{loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />}</div>;
};

export default ItemListContainer;
