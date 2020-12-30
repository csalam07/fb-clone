import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdI4jFHF6TntRF1U5qov3mpZPjujXLpI8",
  authDomain: "fb-clones.firebaseapp.com",
  projectId: "fb-clones",
  storageBucket: "fb-clones.appspot.com",
  messagingSenderId: "218733600969",
  appId: "1:218733600969:web:397f35fac86c1d9a8d2d18",
  measurementId: "G-QKETYP66CR"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;