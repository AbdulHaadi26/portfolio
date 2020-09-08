import React from 'react';
import './style.css';

export default () => <div className="c-w">
    <div className="c-s-w">
        <div className="col-lg-9" style={{ animation: `fadeIn 1s` }}>
            <h1 style={{ marginTop: '48px' }}>LET'S CREATE SOMTHING</h1>
            <h1 style={{ marginBottom: '120px' }}>GREAT TOGETHER.</h1>
            <h1>GET IN TOUCH.</h1>
            <h3>abdulhaadirao@gmail.com</h3>
        </div>
        <div className="col-lg-3" style={{ animation: `fadeIn 4s` }}>
            <ul>
                <li onClick={e => window.open('https://web.facebook.com/AbdulHaadiSpeedster')}>Facebook</li>
                <li onClick={e => window.open('https://github.com/AbdulHaadi26')}>Github</li>
                <li onClick={e => window.open('https://www.linkedin.com/in/abdulhaadirana')}>Linkedin</li>
            </ul>
        </div>
    </div>
</div>