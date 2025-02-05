import React from 'react'
import '../styles/login.css';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import Signup from './Signup';
import Forgot from './Forgot';
const login = ({ handlelogin }) => {
    const [signup, setSignup] = useState();
    const handlesignup = () => {
        setSignup(!signup);
    }
    const [forgot, setForgot] = useState();
    const handleforgot = () => {
        setForgot(!forgot);
    }
    return (
        <div>
        {signup && <Signup handlesignup={handlesignup} />}
        {forgot && <Forgot handleforgot={handleforgot}/>}
            <div className="form">

                <form action="" method="post" class="login-form">
                    <div className="ico">
                        <h3>Welcome Back</h3>
                        <IoClose onClick={handlelogin} className='icos' /></div>
                    <input type="email" placeholder="Email*" required />
                    <input type="password" placeholder="Password*" required />
                    <a><span onClick={handleforgot}>Forgot Password?</span></a>
                    <button type="submit" class="login-btn">Login</button>
                    <div class="signup-link">
                       <h6> Don't have an account?</h6>
                            <a><span class="signup-btn" onClick={handlesignup}>Sign Up here</span></a>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default login
