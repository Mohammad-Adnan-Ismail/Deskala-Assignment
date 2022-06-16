import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Button = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    console.log(user)

    const logout = () => {
        signOut(auth);
        navigate('/login')

    };
    const menuItems = <>  <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>

        <li><Link to="/home">Home</Link></li>
    </>
    return (
        <div class="navbar bg-base-content sticky top-0 z-50 text-center  text-white">
            <div class="navbar-start">
                <div class="navbar-center hidden lg:flex">

                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Button;