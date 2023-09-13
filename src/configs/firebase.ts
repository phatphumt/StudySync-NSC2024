// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCJ1v3sVQK0_m77IlCsU4A7wXMSXZ8Di3I',
	authDomain: 'studysync-nsc.firebaseapp.com',
	projectId: 'studysync-nsc',
	storageBucket: 'studysync-nsc.appspot.com',
	messagingSenderId: '489125403611',
	appId: '1:489125403611:web:e84f5a1ec20bebd633e5fe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db}