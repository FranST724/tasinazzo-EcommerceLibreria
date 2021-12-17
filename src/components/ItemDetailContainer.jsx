import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore } from '../firebase';

const ItemDetailContainer = () => {
	const [ detail, setDetail ] = useState([]);
	const { productId } = useParams();
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			const db = getFirestore();
			let itemCollection = db.collection('items');
			let query = productId ? itemCollection.where('n_id', '==', parseInt(productId, 10)) : itemCollection;

			query
				.get()
				.then((querySnapshot) => {
					if (querySnapshot.size === 0) {
						console.log('No Result!!');
					}
					const element = querySnapshot.docs.map((doc) => ({
						...doc.data(),
						id: doc.data().n_id
					}));
					setDetail(element[0]);
				})
				.catch((error) => {
					console.log('Error searching items', error);
				})
				.finally(() => {
					setLoading(false);
				});
		},
		[ productId ]
	);

	return <div>{loading ? <h2>Cargando...</h2> : <ItemDetail detail={detail} />}</div>;
};

export default ItemDetailContainer;
