import React, { Component } from 'react';
import UserIcon from '../images/user.png'
import PasswordIcon from '../images/padlock.png'
import './login.css'

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="content">
                <form action="">
                    <div className="title-section">
                        <h1 className="title-text">Be Happy</h1>
                    </div>
                    <p>
                        <img className="user-icon" src={UserIcon} alt="user icon"/>
                        <label className="user-label" htmlFor="user-email">Username: </label>
                        <input type="text" name="user-email" placeholder="Username/Email"/>
                    </p>
                    <p>
                        <img className="password-icon" src={PasswordIcon} alt="password icon"/>
                        <label className="password-label" htmlFor="password">Password: </label>
                        <input type="text" name="password" placeholder="Password"/>
                    </p>
                    <div className="submit-section">
                        <button className="login-button">Login</button>
                        <a href="google.com" className="forgot-text">Forgot Password?</a>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Login;