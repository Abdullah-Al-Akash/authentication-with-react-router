import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.init";


const useFirebase = () => {
        const auth = getAuth(app);
        const googleProvider = new GoogleAuthProvider();


        const [user, setUser] = useState({});

        // Sign In With Google:
        const signInWithGoogle = () => {
                signInWithPopup(auth, googleProvider)
                        .then(result => {
                                const user = result.user;
                                setUser(user);
                                console.log(user);
                        })
                        .catch(error => {
                                console.log(error);
                        })
        }


        // Current User Update:
        useEffect(() => {
                onAuthStateChanged(auth, user => {
                        setUser(user);
                })
        }, []);

        // Handle Sign Out:
        const handleSignOut = () => {
                signOut(auth).then(() => {
                        setUser({});
                }).catch((error) => {
                        // An error happened.
                });
        }

        return {
                user,
                setUser,
                signInWithGoogle,
                handleSignOut
        }
}

export default useFirebase;