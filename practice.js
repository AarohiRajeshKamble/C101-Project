
// ADD YOUR FIREBASE LINKS
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUn5Jf0EGmxdK-Delo4ZCFU6bxR4jvk60",
  authDomain: "practice-c2c53.firebaseapp.com",
  databaseURL: "https://practice-c2c53-default-rtdb.firebaseio.com",
  projectId: "practice-c2c53",
  storageBucket: "practice-c2c53.appspot.com",
  messagingSenderId: "1022911587334",
  appId: "1:1022911587334:web:0bd3cfbb114624e0e70f87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


