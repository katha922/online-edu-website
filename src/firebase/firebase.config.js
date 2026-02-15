import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDptWaFHEmMB3YlXd84qTYz5SIKUNFtv5M",
  authDomain: "online-edu-website-7ab82.firebaseapp.com",
  projectId: "online-edu-website-7ab82",
  storageBucket: "online-edu-website-7ab82.firebasestorage.app",
  messagingSenderId: "93525651386",
  appId: "1:93525651386:web:cc163cdf2f5d894152b783"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

