import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);
const Navigation = () => {
        const [user] = useAuthState(auth);

        return (
                <div className="text-center mt-5 pb-5">
                        <Link to="/">Home</Link>
                        <Link className="ms-3" to="/products">Products</Link>
                        <Link className="ms-3" to="/orders">Orders</Link>
                        <Link className="ms-3" to="/register">Register</Link>
                        <span className="ms-3">{user?.displayName ? user.displayName : ''}</span>
                        {
                                user?.uid ?
                                        <button onClick={() => signOut(auth)} className="ms-3">Logout</button>
                                        :
                                        <Link className="ms-3" to="/login">Login</Link>
                        }
                </div>
        );
};

export default Navigation;