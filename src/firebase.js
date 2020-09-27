import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMaf4xR5t9xrTh0e241vYWFRYjbhnFqE4",
    authDomain: "mun-fb-clone.firebaseapp.com",
    databaseURL: "https://mun-fb-clone.firebaseio.com",
    projectId: "mun-fb-clone",
    storageBucket: "mun-fb-clone.appspot.com",
    messagingSenderId: "314567971455",
    appId: "1:314567971455:web:0dd3bcd1b07af0ced2e54a",
    measurementId: "G-WV77070GXV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;