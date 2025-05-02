


// Importaciones de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAILB9L1LD-_GTj_Zsy5ImC71_SOkRw2-o",
  authDomain: "reactecommercealex.firebaseapp.com",
  projectId: "reactecommercealex",
  storageBucket: "reactecommercealex.appspot.com",
  messagingSenderId: "779273433332",
  appId: "1:779273433332:web:c9a6a2181419b2a30beea1",
  measurementId: "G-MZ3TXWJJ7N"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos
export const db = getFirestore(app);



