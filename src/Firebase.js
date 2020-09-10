import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnX_QOzf7df4sJTi3LIxsWj4oMDxPAJHY",
  authDomain: "clone-806f3.firebaseapp.com",
  databaseURL: "https://clone-806f3.firebaseio.com",
  projectId: "clone-806f3",
  storageBucket: "clone-806f3.appspot.com",
  messagingSenderId: "903201995945",
  appId: "1:903201995945:web:3c5222b16a2394865d7db8",
  measurementId: "G-MDSW2Q26QK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
