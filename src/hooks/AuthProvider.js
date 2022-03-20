//import { async } from '@firebase/util';
import React, { useState } from 'react';
import firebase from '../services/firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { async } from '@firebase/util';


let AuthContext = React.Context(null);


export function AuthProvider({ children }) {
 let [user, setUser] = useState();
 let sigin = async (newUser, callback) => {
     const auth = getAuth(firebase);
     await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
     await onAuthStateChanged(auth, (user) => {
         if (user){
             setUser(user);
         }
     })
     callback();
 }
 let sigout = async ()
}

export default AuthProvider;
