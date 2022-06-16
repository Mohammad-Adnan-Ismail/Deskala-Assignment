// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getauth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk8P2J0YmyzcTX2JXbL5CtrL4G3qvrvkw",
  authDomain: "deskala-ca438.firebaseapp.com",
  projectId: "deskala-ca438",
  storageBucket: "deskala-ca438.appspot.com",
  messagingSenderId: "631051541420",
  appId: "1:631051541420:web:a47f88533e0ffc0e083809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getauth(app);
const auth = getAuth(app)
export default auth;