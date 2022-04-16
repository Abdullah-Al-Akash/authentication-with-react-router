import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);
const Login = () => {
        const [signInWithGoogle, user] = useSignInWithGoogle(auth);

        const navigate = useNavigate();
        const location = useLocation();
        const from = location?.state?.from?.pathname || "/";

        const handleGoogleSignIn = () => {
                signInWithGoogle()
                        .then(() => {
                                navigate(from, { replace: true })
                        })
        }
        return (
                <div>
                        <h3 className="text-center">Please Login!</h3>
                        <div>
                                <button onClick={handleGoogleSignIn} className="m-4">Sign In Using Google</button> <br />
                                <input type="email" name="" placeholder="Enter Your Email" id="" />
                                <br />
                                <input type="password" placeholder="Enter Your Password" name="" id="" />
                                <br />
                                <input type="submit" value="Login" />
                        </div>
                </div>
        );
};

export default Login;