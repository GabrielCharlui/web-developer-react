// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ukRgA-2tij-FwwKuumkaa-7Hc_rOFfI",
  authDomain: "web-developer-react.firebaseapp.com",
  projectId: "web-developer-react",
  storageBucket: "web-developer-react.appspot.com",
  messagingSenderId: "751167339603",
  appId: "1:751167339603:web:c17145197b324257c11aa6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
