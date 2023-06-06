import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAst-nsmanHwjtXR3IOyOSEAM8qxEz8j7c",
    authDomain: "chat-app-812e1.firebaseapp.com",
    projectId: "chat-app-812e1",
    storageBucket: "chat-app-812e1.appspot.com",
    messagingSenderId: "295846523134",
    appId: "1:295846523134:web:259b1a5985fbd5f934b5af",
    measurementId: "G-3RPRFSEF6Q"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);