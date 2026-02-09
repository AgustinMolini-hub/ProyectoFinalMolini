import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_lPtI11pzj-GlkFAiV63hJ0cjCGhcvUw",
  authDomain: "nouveau-parfum.firebaseapp.com",
  projectId: "nouveau-parfum",
  storageBucket: "nouveau-parfum.firebasestorage.app",
  messagingSenderId: "359279960494",
  appId: "1:359279960494:web:14d07a7d3132bc5d02683f",
  measurementId: "G-QM5P5PX3DH",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore y Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
