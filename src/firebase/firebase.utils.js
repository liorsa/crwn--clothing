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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //console.log(snapShot);

  if(!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date();

    try {
      await userRef.set ({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;