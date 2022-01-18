// import firebase from "firebase/app";
// import 'firebase/firestore';
// import 'firebase/auth';

// in new version use this
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { seedDatabase } from '../seed';

//here you want to call seed files only onces

const config = {
    apiKey: "AIzaSyCXfmyPxMQWtVjALJ2HUBA9W-v3ObCqXf4",
    authDomain: "instagram-atib.firebaseapp.com",
    projectId: "instagram-atib",
    storageBucket: "instagram-atib.appspot.com",
    messagingSenderId: "1004479547101",
    appId: "1:1004479547101:web:ea0171001c3c0c34febd34"
}

 const app = firebase.initializeApp(config);
 const { FieldValue } = firebase.firestore;
    //console.log('FIREBASE THINGS', Firebase);

// seedDatabase(firebase);


export { app, FieldValue };