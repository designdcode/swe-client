import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM5Cqu1m1YJ7E44OfM9Yo3LH0ZUN8Y6x4",
  authDomain: "sunmoon-swe.firebaseapp.com",
  projectId: "sunmoon-swe",
  storageBucket: "sunmoon-swe.appspot.com",
  messagingSenderId: "1064857281018",
  appId: "1:1064857281018:web:b2881ce151e1a16b068443",
  measurementId: "G-JYK8JT1WEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
