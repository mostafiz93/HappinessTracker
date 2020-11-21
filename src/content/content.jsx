import React, { Component } from 'react';
import Angry from '../images/angry.png'
import Sad from '../images/sad.png'
import Confused from '../images/confused.png'
import Crying from '../images/crying.png'
import Happy from '../images/happy.png'
import Laughing from '../images/laughing.png'
import './content.css'

class Content extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="content">
                <div className="heading">
                    <h1>Be happy with what you have.</h1><h1>Be excited about what you want.</h1>
                </div>
                <div className="options">
                    <div className="angry">
                        <img src={Angry} alt="Angry"/>
                        <p>Angry</p>
                    </div>
                    <div className="very-sad">
                        <img src={Crying} alt="Very Sad"/>
                        <p>Very Sad</p>
                    </div>
                    <div className="sad">
                        <img src={Sad} alt="Sad"/>
                        <p>Sad</p>
                    </div>
                    <div className="confused">
                        <img src={Confused} alt="Confused"/>
                        <p>Confused</p>
                    </div>
                    <div className="happy">
                        <img src={Happy} alt="Happy"/>
                        <p>Happy</p>
                    </div>
                    <div className="very-happy">
                        <img src={Laughing} alt="very Happy"/>
                        <p>Very Happy</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Content;