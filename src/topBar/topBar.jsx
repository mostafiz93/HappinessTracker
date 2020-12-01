import React, {Component} from 'react'
import Logo from '../images/logo.JPG'
import Quote from '../images/quote.JPG'
import './topBar.css'

class TopBar extends Component {
    render() { 
        return ( 
            <div className="top-bar">
                <div className="logo">
                    <img src={Logo} alt="Logo" className="logo-picture"/>
                </div>
                <div className="content">
                    <img src={Quote} alt="Quotation" className="content-picture"/>
                </div>
                <div className="login-signup">
                    <div className="sign-up">
                        <a href="#">sign up</a>
                    </div>
                    <div className="log-in">
                        <a href="#">log in</a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TopBar;