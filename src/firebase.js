import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDT9RXACVZy2eET9Crl6GEoW-nuIjHQo6g",
  authDomain: "answer-hou-6d67e.firebaseapp.com",
  projectId: "answer-hou-6d67e",
  storageBucket: "answer-hou-6d67e.appspot.com",
  messagingSenderId: "669535385266",
  appId: "1:669535385266:web:71c3ac1becc27a8a983bab",
  measurementId: "G-QKQ7DF3PBL"
};
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
