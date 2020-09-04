import React from 'react';
import FB from '../../assets/fb.svg';
import IN from '../../assets/in.svg';
import LK from '../../assets/lnk.svg';
import './style.css';
var list = [{ i: FB, u: 'https://web.facebook.com/AbdulHadiSpeedster' }, { i: IN, u: 'https://github.com/AbdulHaadi26' }, { i: LK, u: 'https://www.linkedin.com/in/abdulhaadirana' }];
export default () => <div className="bl-s-w">
    <h1 className="h">Hi, I am <b>h<span>AA</span>DI</b></h1>
    <h6 className="sh">full stAck developer</h6>
    <div className="flex">
        {list.map((i, k) => <div className="svg" key={k} onClick={e => window.open(i.u)} style={{ backgroundImage: `url(${i.i})` }} />)}
    </div>
</div>