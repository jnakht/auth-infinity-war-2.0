import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLoginWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userLogOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('this is the current user', currentUser)
        })
    } ,[])
    const authInfo = {
        user,
        createUser,
        userLoginWithPassword,
        userLogOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;