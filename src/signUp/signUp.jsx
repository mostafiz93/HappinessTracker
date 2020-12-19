import React, { Component } from 'react';
import './signUp.css'

class SignUp extends Component {
    render() { 
        return ( 
            <div className="wrapper">
                <h1>Be Happy!</h1>
                <form action="">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                    <input type="text" placeholder="Confirm Password"/>
                    <br/>
                    <button className="register-button">Register</button>
                    <p>Have account? <a href="#">Login here</a></p>
                </form>
            </div>
         );
    }
}
 
export default SignUp;