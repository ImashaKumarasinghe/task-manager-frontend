import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqERlFio4oHbUMgMtq8tXLCxTSFFAUbhI",
  authDomain: "mini-task-manager-6161f.firebaseapp.com",
  projectId: "mini-task-manager-6161f",
  storageBucket: "mini-task-manager-6161f.firebasestorage.app",
  messagingSenderId: "509617170763",
  appId: "1:509617170763:web:84e91b293c50d0b923e0ce",
  measurementId: "G-DDV4Q7K5FG"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);