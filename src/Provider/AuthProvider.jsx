import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { addToLs, getItem } from '../utility/localStorage';
import auth from '../utility/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [cartPrice, setCartPrice] = useState(0);
    const [cartItems, setCartItems] = useState([]);



    useEffect(() => {
        const cart = getItem();
        const items = Object.keys(cart)
        setCartItems(items)
    }, [])

    // create user by email password
    const handleSignIn = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // create user by google
    const handleGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }
    // update profile
    const updateUser = (name, url) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    // login user
    const handleLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out
    const handleSignOut = () => {
        setLoader(true);
        return signOut(auth)
    }
    const handleAddToCart = (price, id) => {
        addToLs(id);
        const cart = getItem()
        setCartItems(cart);
        setCartPrice(cartPrice + price);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser)
            setLoader(false)
            if (user) {
                axios.post('http://localhost:5000/users', currentUser)
                    .then(res => {console.log(res.data) })
                    
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            } else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
        })
        return () => unSubscribe()
    }, [user])


    const authInfo = {
        user,
        handleSignIn,
        handleGoogle,
        handleLogin,
        handleSignOut,
        updateUser,
        loader,
        handleAddToCart,
        cartPrice,
        cartItems,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}


AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;