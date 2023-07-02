import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBWfXFPQvsLQFv0sIiJ7x09zdV0BCM4YAM",
  authDomain: "hotstar-clone-6b47a.firebaseapp.com",
  projectId: "hotstar-clone-6b47a",
  storageBucket: "hotstar-clone-6b47a.appspot.com",
  messagingSenderId: "298802236004",
  appId: "1:298802236004:web:09756282a46c1087226d71",
  measurementId: "G-HBWN4XYX2W"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {auth,provider,storage};
export default db;