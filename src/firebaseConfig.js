// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIdE6J9oHvV1OPu3xY6KMNh1t7bDuHPwU",
  authDomain: "confession-site-2023.firebaseapp.com",
  projectId: "confession-site-2023",
  storageBucket: "confession-site-2023.appspot.com",
  messagingSenderId: "895708120883",
  appId: "1:895708120883:web:2fd8a1d898001cb9402046",
  measurementId: "G-HD3E8VW40Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const dbInstance = collection(database, "users");
