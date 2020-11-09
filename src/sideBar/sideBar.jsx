import React, { Component } from 'react'
import './sideBar.css'

class SideBar extends Component{
    render(){
        return (
            <div className="side-bar">
                <div className="heading-section">
                    <h3 className="side-bar-tittle">Be Happy</h3>
                    <div className="under-title-line"></div>
                </div>
                <div className="content">
                    <ul>
                        <li><a href="">Statistics</a></li>
                        <li><a href="">Give status</a></li>
                        <li><a href="">Feedback</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;