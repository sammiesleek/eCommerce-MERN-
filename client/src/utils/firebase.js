// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_TtG_RJISKZT9QMiVNrqeP0iqFmhljbI",
  authDomain: "gstores-434e2.firebaseapp.com",
  projectId: "gstores-434e2",
  storageBucket: "gstores-434e2.appspot.com",
  messagingSenderId: "390483169039",
  appId: "1:390483169039:web:d272fe159d3dc31496787a",
};

// Initialize Firebase

// prevents us from doing more than one application at a time
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
