import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBbrsVSz6Q7_cnU6INu-TKJrxHuwCacfyg",
  authDomain: "mine-7f634.firebaseapp.com",
  projectId: "mine-7f634",
  storageBucket: "mine-7f634.appspot.com",
  messagingSenderId: "157489452148",
  appId: "1:157489452148:web:4818c04da1d0ed5831ed21",
  measurementId: "G-17P6B4YJJQ",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
