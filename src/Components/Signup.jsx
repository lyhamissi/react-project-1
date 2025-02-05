import React from 'react'
import '../styles/signup.css';
import { IoClose } from "react-icons/io5";
const Signup = ({ handlesignup }) => {
    return (
        <div>
            <div className="forms">

                <form action="" method="post" class="login-form">
                    <div className="ico">
                    <h3>Sign Up</h3>
                    <IoClose onClick={handlesignup} className='icos' /></div>
                    <input type="text" placeholder="Full Names*" required />
                    <input type="email" placeholder="Email*" required />
                    <input type="password" placeholder="Password*" required />
                    <button type="submit" class="submit-btn">Sign Up</button>
                    <div class="signup-link">
                        <h6>Already have an account?</h6>
                        <a href="" class="signup-btn">Login here</a>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup
