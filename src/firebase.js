import * as firebase from 'firebase';

import 'firebase/firestore';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyAeUIX0jtCQlhzI_neO6zUbINU0EYYecSs',
	authDomain: 'libreria-react-59131.firebaseapp.com',
	projectId: 'libreria-react-59131',
	storageBucket: 'libreria-react-59131.appspot.com',
	messagingSenderId: '285061488448',
	appId: '1:285061488448:web:a6c63354451fbf413864a5',
	measurementId: 'G-HNTCG41Z5N'
});

export function getFirebase() {
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}
