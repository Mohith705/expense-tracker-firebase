import React, { useEffect } from 'react'
import { auth, provider } from '../../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate, Navigate } from 'react-router-dom'
import "./styles.css";
import { useGetUserInfo } from '../../hooks/useGetUserInfo';

const Auth = () => {

    const navigate = useNavigate();
    const { isAuth } = useGetUserInfo();

    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true,
        }
        localStorage.setItem("auth", JSON.stringify(authInfo));
        navigate("/expense-tracker")
    };

    // useEffect(() => {
    //     if(isAuth){
    //         navigate("/expense-tracker");
    //     }
    // }, [])

    if(isAuth){
        return <Navigate to={"/expense-tracker"}/>
    }

    return (
        <div className='login-page'>
            Sign In With Google to Continue
            <button className='login-with-google-btn' onClick={signInWithGoogle}>
                {" "}
                Sign In With Google
            </button>
        </div>
    )
}

export default Auth
