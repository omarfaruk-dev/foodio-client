import React, { useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setLoading, logout } from '../store/slices/authSlice';

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    
    // Redux state
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.auth);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const logOut = () => {
        return signOut(auth)
    };

    // Firebase auth state observer - updates Redux
    useEffect(() => {
        dispatch(setLoading(true)); // Start loading
        
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                // Get Firebase ID token and store it
                try {
                    const token = await currentUser.getIdToken();
                    localStorage.setItem('foodio-token', token);
                } catch (error) {
                    console.error('Token error:', error);
                }
            } else {
                localStorage.removeItem('foodio-token');
            }
            
            // Update Redux state
            dispatch(setUser(currentUser));
        })
        
        return () => {
            unsubscribe();
        }
    }, [dispatch])

    const authData = {
        user,
        setUser: (userData) => dispatch(setUser(userData)),
        createUser,
        loginUser,
        googleSignIn,
        logOut: () => {
            logOut();
            dispatch(logout());
        },
        loading,
        setLoading: (value) => dispatch(setLoading(value)),
        updateUser,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;