// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhydLbLSftUg3yioOspijhIpkblnw5-M4",
    authDomain: "taskmanagementapp1.firebaseapp.com",
    projectId: "taskmanagementapp1",
    storageBucket: "taskmanagementapp1.appspot.com",
    messagingSenderId: "756486858860",
    appId: "1:756486858860:web:92916018e316bf8117d049"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
