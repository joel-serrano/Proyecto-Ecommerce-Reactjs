import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRMBYktm3RzcQTAvCaNMiFgmVFSpiklUI",
  authDomain: "kenzo-1.firebaseapp.com",
  projectId: "kenzo-1",
  storageBucket: "kenzo-1.appspot.com",
  messagingSenderId: "676102679409",
  appId: "1:676102679409:web:d69c99dd85fd161b4ea4d0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)