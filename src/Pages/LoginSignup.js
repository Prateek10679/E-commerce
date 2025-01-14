import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="logonsignuo">
      <div className="loginsignup_container">
        <h1>Sign Up</h1>
        <div className="loginsignup_fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Adress' />
          <input type="password" placeholder='Password' />
           </div>
            <button>Continue</button>
              <p className="loginsignup_login">Already have an account?<span>Login here</span></p>
                <div className="loginsignup_agree">
                  <input type="checkbox" name='' />
                  <p>By continuing, i agree to the terms of use of privacy&policy</p>
                </div>


      </div>
    </div>
  )
}

export default LoginSignup
