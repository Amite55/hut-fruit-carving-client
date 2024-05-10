// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMhVTTHIFUoeaSPRKGXjDw3ds6DKb3-aw",
  authDomain: "hut-fruit-carving.firebaseapp.com",
  projectId: "hut-fruit-carving",
  storageBucket: "hut-fruit-carving.appspot.com",
  messagingSenderId: "481413737981",
  appId: "1:481413737981:web:ebc5b48f48426e4a6bbd94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;