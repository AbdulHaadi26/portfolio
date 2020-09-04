import React from 'react';
import Avtr from '../../assets/avtr.jpg';
import './style.css';

export default () => <div className="i-w">
    <div className="col-lg-7 p-0">
        <h6>My name is <span>Abdul Haadi</span> and I’m a <span>Full Stack Developer</span> having experience in planning, developing, deploying, maintaining and optimizating responsive web applications in <span>React.js, Node.js, Express.js</span> and <span>MongoDB</span>.</h6>
    </div>
    <div className="col-lg-5 p-0">
        <div className="img-b">
            <img src={Avtr} alt="Abdul Haadi" />
        </div>
    </div>
</div>