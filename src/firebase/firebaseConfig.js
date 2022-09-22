// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "tienda-violeta-47f8b.firebaseapp.com",
  projectId: "tienda-violeta-47f8b",
  storageBucket: "tienda-violeta-47f8b.appspot.com",
  messagingSenderId: "66601730938",
  appId: "1:66601730938:web:b132aff58df709b95b8cc3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//
const FirestoreDb = getFirestore(app);

export { app, FirestoreDb };
