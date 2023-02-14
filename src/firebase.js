import firebase from "firebase";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA0OlK8qJZk09gQaCw0Cd9cnJrZwvWoQig",
    authDomain: "new-clone-603b9.firebaseapp.com",
    projectId: "new-clone-603b9",
    storageBucket: "new-clone-603b9.appspot.com",
    messagingSenderId: "1015175918854",
    appId: "1:1015175918854:web:5b85cf9142f27ad6c8da87"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebaseApp.firestore();
  export { auth, provider };
  export default db;

  
