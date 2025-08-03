// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js"// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAlZvM4jKV8Gd3WuvvziAL5ogC33OONrAk",
      authDomain: "whatsapp-gifs-e96dc.firebaseapp.com",
      projectId: "whatsapp-gifs-e96dc",
      storageBucket: "whatsapp-gifs-e96dc.firebasestorage.app",
      messagingSenderId: "577650276378",
      appId: "1:577650276378:web:aad87d22f134424fd8b9a3",
      measurementId: "G-779YVP40GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth};