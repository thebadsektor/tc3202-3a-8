import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4B1ipzrRf9oPEOam9_zlDPUhyxW4QLFs",
  authDomain: "lu-cart-firebase.firebaseapp.com",
  databaseURL:
    "https://lu-cart-firebase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lu-cart-firebase",
  storageBucket: "lu-cart-firebase.appspot.com",
  messagingSenderId: "179629333292",
  appId: "1:179629333292:web:32f35b0c93b12531b9ea89",
  measurementId: "G-FJEJC08X7Y",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
