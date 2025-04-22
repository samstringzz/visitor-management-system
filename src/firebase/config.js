import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKc483lh4BPbNriLq5hdH5ybhd744XYDk",
    authDomain: "customer-management-syst-464f2.firebaseapp.com",
    projectId: "customer-management-syst-464f2",
    storageBucket: "customer-management-syst-464f2.firebasestorage.app",
    messagingSenderId: "752685399227",
    appId: "1:752685399227:web:3d857f2cbb94289b323d9e"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);