import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZNybxy426lenvtYLJZA234xEK3s0P6ps",
    authDomain: "lista-fe6ab.firebaseapp.com",
    projectId: "lista-fe6ab",
    storageBucket: "lista-fe6ab.appspot.com",
    messagingSenderId: "21472723667",
    appId: "1:21472723667:web:0605e86840f5d098a88a26"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { app, auth }

