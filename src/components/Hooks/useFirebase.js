import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init";

initializeAuthentication();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            });
    }
    const signUpUsingEmailPassword = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                user.displayName = name;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const signInUsingEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, result => {
            setUser(result)
        })
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    return {
        user,
        signInUsingGoogle,
        signUpUsingEmailPassword,
        signInUsingEmailPassword,
        logOut
    }

}
export default useFirebase;