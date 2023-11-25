
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_0k-ag1QByuCN5tBq3aJHZsA8t5C2oF4",
  authDomain: "todo-project-adf2f.firebaseapp.com",
  projectId: "todo-project-adf2f",
  storageBucket: "todo-project-adf2f.appspot.com",
  messagingSenderId: "237214413201",
  appId: "1:237214413201:web:e0da39c8c9497ccbc3aa30",
  measurementId: "G-BGTQXLB0Z6"
};

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

