import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init";

initializeAuthentication();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .finally(() => setIsLoading(false));
    }
    const signUpUsingEmailPassword = (name, email, password) => {
        setIsLoading(true);
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
            .finally(setIsLoading(false));
    }
    const signInUsingEmailPassword = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));


        return signInWithEmailAndPassword;
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});

            })
            .finally(() => { setIsLoading(false) })
    }

    useEffect(() => {
        onAuthStateChanged(auth, result => {
            setUser(result);

            setIsLoading(false);
        })
    }, []);
    return {
        user,
        isLoading,
        signInUsingGoogle,
        signUpUsingEmailPassword,
        signInUsingEmailPassword,
        logOut
    }

}
export default useFirebase;