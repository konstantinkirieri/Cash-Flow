import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { getDatabase, ref } from "firebase/database";


export const firebaseConfig = {
  apiKey: "AIzaSyBn4YE1SB0sS5DDONAmSSKa4ZUw9uHBSz8",
  authDomain: "cash-flow-gb.firebaseapp.com",
  databaseURL: "https://cash-flow-gb-default-rtdb.firebaseio.com",
  projectId: "cash-flow-gb",
  storageBucket: "cash-flow-gb.appspot.com",
  messagingSenderId: "982002312454",
  appId: "1:982002312454:web:63702abf15349b59b82a87"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signUp = async (email:string, pass: any) =>
  await createUserWithEmailAndPassword(auth, email, pass);
export const logIn = async (email:string, pass: any) =>
  await signInWithEmailAndPassword(auth, email, pass);
export const logOut = async () => await signOut(auth);
export const db = getDatabase(app);
export const categoryRef = ref(db, 'CategoriesList');
export const userDataRef = ref(db, 'UserData');
export const getItemRefById = (dataId: any) => ref(db, `UserData/${dataId}`);
export const getCategoryRefById = (id:any) => ref(db, `CategoriesList/${id}`);