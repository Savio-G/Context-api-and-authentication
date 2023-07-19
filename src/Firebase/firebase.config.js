// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSNAE4YF4a3TB-I0W_drmDHsJ_c1tM-7Q",
  authDomain: "auth-firebase-context-ta-e2ffc.firebaseapp.com",
  projectId: "auth-firebase-context-ta-e2ffc",
  storageBucket: "auth-firebase-context-ta-e2ffc.appspot.com",
  messagingSenderId: "983603362839",
  appId: "1:983603362839:web:daec0fe66b7c8f4ffcb052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app