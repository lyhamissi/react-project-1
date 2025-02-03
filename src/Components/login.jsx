import React from 'react'
import '../styles/login.css';
const login = () => {
    return (
        <div>
            <div className="form">
                <h3>Login</h3>
                <form action="" method="post" class="login-form">
                    <input type="email" placeholder="Email*" required />
                    <input type="password" placeholder="Password*" required />
                    <button type="submit" class="login-btn">Login</button>
                    <div class="signup-link">
                        <a href="">Don't have an account?</a>
                        <a href="/signup" class="signup-btn">Sign Up here</a>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default login
