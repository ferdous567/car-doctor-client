import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    
        useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser =>{

                const userEmail = currentUser?.email || user?.email;
                const loggedUser = {email: userEmail};

                setUser(currentUser)
                console.log('state changed with on auth state change', currentUser);
                setLoading(false);
                if(currentUser){
                    axios.post('https://car-doctor-server-silk-seven.vercel.app/jwt',loggedUser, {withCredentials: true})
                    .then(res =>{
                        console.log('token response', res.data)
                    })
                }
                else{
                    axios.post('https://car-doctor-server-silk-seven.vercel.app/logout', loggedUser, {
                        withCredentials: true
                    })
                    .then(res => {
                        console.log(res.data)
                    })
                }
            })
            return () =>{
                return unSubscribe();
            }
        }, [])
    

    const logOut = () =>{
        return signOut(auth);
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;