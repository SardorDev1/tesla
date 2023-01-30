
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries   

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4ZKmJxftqDsNZH1ycFRWhXX0nI_1wXVQ",
  authDomain: "tesla-base-1f880.firebaseapp.com",
  projectId: "tesla-base-1f880",
  storageBucket: "tesla-base-1f880.appspot.com",
  messagingSenderId: "270684999057",
  appId: "1:270684999057:web:cf51352f06036fe6981e30",
  measurementId: "G-6V9F2Y57GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app