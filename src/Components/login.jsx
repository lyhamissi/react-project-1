import React from 'react'
import '../styles/login.css';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import Signup from './Signup';
const login = ({ handlelogin }) => {
    const [signup, setSignup] = useState();
    const handlesignup = () => {
        setSignup(!signup);
    }
    return (
        <div>
        {signup && <Signup handlesignup={handlesignup} />}
            <d..cdiv className="form">

                <form action="" method="post" class="login-form">
                    <div className="ico">
                        <h3>Login</h3>
                        <IoClose onClick={handlelogin} className='icos' /></div>
                    <input type="email" placeholder="Email*" required />
                    <input type="password" placeholder="Password*" required />
                    <a href="">Forgot Password?</a>
                    <button type="submit" class="login-btn">Login</button>
                    <div class="signup-link">
                        <a href="">Don't have an account?</a>
                            <a><span class="signup-btn" onClick={handlesignup}>Sign Up here</span></a>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default login
