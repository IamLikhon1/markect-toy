// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2mz0OQiaK9JVoU0xHGrg0FKrifN71_wU",
  authDomain: "toys-car.firebaseapp.com",
  projectId: "toys-car",
  storageBucket: "toys-car.appspot.com",
  messagingSenderId: "419033053932",
  appId: "1:419033053932:web:3c34fd266dbeaeadadc3c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app