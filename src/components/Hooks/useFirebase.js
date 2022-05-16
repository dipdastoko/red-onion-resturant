import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
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
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    return {
        user,
        signInUsingGoogle,
        logOut
    }

}
export default useFirebase;