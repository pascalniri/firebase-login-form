const firebaseConfig = {
    apiKey: "AIzaSyBOpwvRxiImyjizJkMLsCpmSAJ9PUbBB_w",
    authDomain: "log-in-form2.firebaseapp.com",
    projectId: "log-in-form2",
    storageBucket: "log-in-form2.appspot.com",
    messagingSenderId: "846598198475",
    appId: "1:846598198475:web:6e08a0b5d7463d43e5b74e",
    measurementId: "G-8H3Y5E2HMT"
  };
  const app = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth();
  const db = firebase.firestore();