import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfL-lJzdLo0dOQ4QAoBq3EGDcuBn_R048",
  authDomain: "jeepeetee-2c6c5.firebaseapp.com",
  projectId: "jeepeetee-2c6c5",
  storageBucket: "jeepeetee-2c6c5.appspot.com",
  messagingSenderId: "624960653347",
  appId: "1:624960653347:web:c755b77e66a6049c554996",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
