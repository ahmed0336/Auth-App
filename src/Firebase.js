// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmeFcofWOEASt072NG5oZjKMojgZJQPHI",
  authDomain: "react-js-auth-app.firebaseapp.com",
  projectId: "react-js-auth-app",
  storageBucket: "react-js-auth-app.appspot.com",
  messagingSenderId: "916288160410",
  appId: "1:916288160410:web:793ccf36f96c3867bf5523",
  measurementId: "G-PWVCMSR589"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;