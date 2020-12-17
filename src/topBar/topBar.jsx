import React, {Component} from 'react'
//import ReactDom from 'react-dom'
import {Link} from 'react-router'
import Logo from '../images/logo.JPG'
import Quote from '../images/quote.JPG'
import './topBar.css'
import Login from '../login/login'
import SignUp from '../signUp/signUp'

class TopBar extends Component {
    render() { 
        return ( 
            <div className="top-bar">
                <div className="logo">
                    <img src={Logo} alt="Be happy Logo"/>
                </div>
                <div className="content">
                    <img src={Quote} alt="Quotation"/>
                </div>
                <div className="login-signup">
                    <div className="sign-up">
                        <a href={SignUp}>sign up</a>
                    </div>
                    <div className="log-in">
                        <Link to={Login}>Login</Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TopBar;