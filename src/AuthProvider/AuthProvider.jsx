import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setUser(null)
        signOut(auth)
    }

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    },[])


    const authInfo = {
        user,
        createUser,
        singInUser,
        googleLogIn,
        githubLogIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
  };