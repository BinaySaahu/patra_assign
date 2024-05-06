// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ7T2WBWt3R9wBYpZ_yslKCoFOYiRAHUA",
  authDomain: "auth-4a380.firebaseapp.com",
  projectId: "auth-4a380",
  storageBucket: "auth-4a380.appspot.com",
  messagingSenderId: "1073335068023",
  appId: "1:1073335068023:web:86049f45a08dcb037dad72",
  measurementId: "G-MHZBFBW6HY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// provider.setCustomParameters({
//   'login_hint': 'user@example.com'
// });




// const analytics = getAnalytics(app);