import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
        const { signInWithGoogle } = useFirebase();
        return (
                <div>
                        <h3 className="text-center">Please Login!</h3>
                        <div>
                                <button onClick={signInWithGoogle} className="m-4">Sign In Using Google</button> <br />
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