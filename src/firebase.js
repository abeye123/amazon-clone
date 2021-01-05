import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWMKTg1MDFv9JBKHMgJ02pgKOoj1EKKAE",
  authDomain: "clon-1f6eb.firebaseapp.com",
  projectId: "clon-1f6eb",
  storageBucket: "clon-1f6eb.appspot.com",
  messagingSenderId: "387090572462",
  appId: "1:387090572462:web:8ea95df74c2a691e8a793f",
  measurementId: "G-L84H0C35MD"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{db, auth};
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
