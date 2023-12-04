import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxKd9Jbgse8xAcI1RvFeXmW5b1wvvsG4Q",
  authDomain: "dars8-810ff.firebaseapp.com",
  projectId: "dars8-810ff",
  storageBucket: "dars8-810ff.appspot.com",
  messagingSenderId: "346031572137",
  appId: "1:346031572137:web:e66e12e0862a2e8e1055b8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
