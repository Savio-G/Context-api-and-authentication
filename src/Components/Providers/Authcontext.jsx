import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';


const auth = getAuth(app)
export const authenticationContext = createContext(null)
// Here the destructured children is the router from the main jsx page which allows us the acess to the whole app.
const Authcontext = ({ children }) => {
  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // The loggedInUser returns a promise from firebase and it requires three parametres. The first parametre Auth is here but email and password is not they will be coming from the Login page. For that very reason I am storing the function in the authInfo object and passing it on as context.
  const loggedInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // The brain for handling logging out
  const logOut = () => {
    return signOut(auth)

  }
  // Observe auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('auth state changed', currentUser)
      setUser(currentUser)
    });
    return () => {
      unsubscribe()
    }
  }, [])

  const authInfo = { user, createUser, loggedInUser, logOut }

  return (
    <authenticationContext.Provider value={authInfo}>
      {children}
    </authenticationContext.Provider>
    // Here I am providing the whole app i.e the routers that is passed here as the children with the object authInfo as value which contains the information necessary for carrying out Authentication.
  );
};

export default Authcontext;