// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyYeB-QG96MywHn9NcwiHqfVP-PtUl6AM",
    authDomain: "start-logic-client.firebaseapp.com",
    projectId: "start-logic-client",
    storageBucket: "start-logic-client.appspot.com",
    messagingSenderId: "554273629630",
    appId: "1:554273629630:web:e40c91bd412902eaed05ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;