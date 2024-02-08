import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCIV8Dw_o1cbH2JJjubpH9-AMuHdwJ4Uq4',
	authDomain: 'users-crud-2024-ddf70.firebaseapp.com',
	projectId: 'users-crud-2024-ddf70',
	storageBucket: 'users-crud-2024-ddf70.appspot.com',
	messagingSenderId: '138445821859',
	appId: '1:138445821859:web:a39188aabf6057cf83ac16'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth Module
export const auth = getAuth(app);

// Firestore Module

const db = getFirestore(app);
export const usersCollectionReference = collection(db, 'users');
