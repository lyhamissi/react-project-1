import React from 'react'
import '../styles/signup.css';
import { IoClose } from "react-icons/io5";
const Forgot = ({handleforgot}) => {
    return (
        <div>
            <div className="forms">

                <form action="" method="post" class="login-form">
                    <div className="ico">
                        <h3>Forgot Password</h3>
                        <IoClose onClick={handleforgot} className='icos' /></div>
                    <input type="email" placeholder="Email*" required />
                    <button type="submit" class="submitss-btn">Requset reset Link</button>
                    <button type="submit" class="submits-btn">Back to Login</button>
                </form>

            </div>
        </div>
    )
}

export default Forgot
