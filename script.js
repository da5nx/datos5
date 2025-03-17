// Configuración de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1Q_025Jwq_eoeGOEapOU3_2z18lWz59c",
  authDomain: "datos5-a96cc.firebaseapp.com",
  projectId: "datos5-a96cc",
  storageBucket: "datos5-a96cc.firebasestorage.app",
  messagingSenderId: "756946488969",
  appId: "1:756946488969:web:865590c33633144a528058"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Guardar datos en Firestore
document.getElementById('dataForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        await addDoc(collection(db, "users"), { name, email });
        document.getElementById('message').textContent = 'Datos guardados exitosamente.';
    } catch (error) {
        console.error("Error al guardar los datos:", error);
        document.getElementById('message').textContent = 'Error al guardar los datos.';
    }
});
