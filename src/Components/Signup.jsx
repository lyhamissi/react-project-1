import React from 'react'

const Signup = () => {
  return (
    <div>
      <div className="form">
                <h3>Sign Up</h3>
                <form action="" method="post" class="login-form">
                    <input type="email" placeholder="Email*" required />
                    <input type="password" placeholder="Password*" required />
                    <button type="submit" class="login-btn">Sign Up</button>
                    <div class="signup-link">
                        <a href="">Already have an account?</a>
                        <a href="/login" class="signup-btn">Login here</a>
                    </div>
                </form>

            </div>
    </div>
  )
}

export default Signup
