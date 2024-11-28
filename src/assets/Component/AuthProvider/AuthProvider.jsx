import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../../reza.init";



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    // LogIn User Details (user)
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)


    const createUser = (email, passwoard) => {
        return createUserWithEmailAndPassword(auth, email, passwoard)
    }

    const userSignIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const userSignout = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const cleanUp = onAuthStateChanged(auth, (user) => {
            console.log("Current User :", user);
            setuser(user)
            setloading(false)
            if (!user) {
                console.log("No User Available");
            }
        })

        return () => {
            cleanUp();
        }


    }, [])














    const authinfo = {
        createUser,
        userSignIn,
        user,
        loading,
        userSignout

    }


    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;