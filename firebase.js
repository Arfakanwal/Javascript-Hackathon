

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore ,collection ,addDoc  ,getDoc  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCZzSFu3mWs2sQVy1AGfPugEzlnYaLmqM",
  authDomain: "blogs-803e6.firebaseapp.com",
  projectId: "blogs-803e6",
  storageBucket: "blogs-803e6.firebasestorage.app",
  messagingSenderId: "784073262496",
  appId: "1:784073262496:web:78a764b499cf7af854d0c5",
  measurementId: "G-GTMFT02J7R"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{
    collection ,addDoc ,getDoc
}
