import React from 'react'
import profile from "../../assets/a.png"
import email from "../../assets/email.jpg"
import pasword from "../../assets/pwd.png"
import './Loginstyle.css'

const Login = () => {
  return (
    <div className='main'>
        <div className="sub-main">
          <div>
            <div className='imgs'>
              <div className="container-image">
                <img src={profile} alt="profile" className='profile'/>
              </div>
            </div>
            <div>
                <h1>LOGIN</h1>
                <div>
                    <img src={email} alt="email" className='email'/>
                    <input type="text" placeholder='user name' className='name'/>
                </div>
                <div className='second-input'>
                    <img src={pasword} alt="pass" className='email'/>
                    <input type="password" placeholder='Enter with Password' className='name'/>
                </div>
                <div className="login-button">
                <button className='login-button'>LOGIN</button>
                </div>
    
                    <p className='link'>
                        <a href="#">Forgot Pasword?</a>or<a href="">Sign Up</a>
                    </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login