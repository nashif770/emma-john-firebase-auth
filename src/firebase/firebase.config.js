// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMhrTrdK5FOQVUVBgle2n_YMNu_8IZjBQ",
  authDomain: "emma-john-firebase-auth.firebaseapp.com",
  projectId: "emma-john-firebase-auth",
  storageBucket: "emma-john-firebase-auth.appspot.com",
  messagingSenderId: "314832393594",
  appId: "1:314832393594:web:8403a90aaea845d44332c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;