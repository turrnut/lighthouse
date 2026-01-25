// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVjnAxso2Vr3C4vEulPxHrs4FpzpM54JQ",
  authDomain: "lighthouse-edu.firebaseapp.com",
  projectId: "lighthouse-edu",
  storageBucket: "lighthouse-edu.firebasestorage.app",
  messagingSenderId: "62395475181",
  appId: "1:62395475181:web:524fa61381694dfc4598e4",
  measurementId: "G-JCCGNBND4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = app.auth();
export default app;
