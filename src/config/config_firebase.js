import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQiwwYuENCH7vPyPpDAieiLeBm3mC8wsk",
  authDomain: "game-97526.firebaseapp.com",
  databaseURL: "https://game-97526.firebaseio.com",
  projectId: "game-97526",
  storageBucket: "game-97526.appspot.com",
  messagingSenderId: "781183450348",
  appId: "1:781183450348:web:2fcffc97f048d31e5179c9",
};

export const fireBase = firebase.initializeApp(firebaseConfig);
