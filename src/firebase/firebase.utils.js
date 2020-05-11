import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config =
{
  apiKey: "AIzaSyCx8FdC8QWTBsipAJogrGz-TnD1ovSHXnA",
  authDomain: "crwn-db-93475.firebaseapp.com",
  databaseURL: "https://crwn-db-93475.firebaseio.com",
  projectId: "crwn-db-93475",
  storageBucket: "crwn-db-93475.appspot.com",
  messagingSenderId: "607809927035",
  appId: "1:607809927035:web:07798bf8c0f6a036be2fde"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;