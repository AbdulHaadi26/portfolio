import React from 'react';
import FB from '../../assets/fb.svg';
import IN from '../../assets/in.svg';
import LK from '../../assets/lnk.svg';
import './style.css';
import history from '../../utils/history';
var list = [{ i: FB, u: 'https://web.facebook.com/AbdulHadiSpeedster' }, { i: IN, u: 'https://github.com/AbdulHaadi26' }, { i: LK, u: 'https://www.linkedin.com/in/abdulhaadirana' }];

export default () => <div className="l-w">
    <div className="col-lg-11 col-12 l-s-2 p-0">
        <div className="col-lg-8 col-12 p-0 l-s-w ht">
            <div className="l-sub-w">
                <div className="f-h">
                    <h6 className="sh">full stAck developer</h6>
                    <h1 className="h">hAADI.</h1>
                </div>
                <div className="f-h-1">
                    <h1 className="sh1">In a World of Technology, People Make the Difference.</h1>
                </div>
                <button className="bt" onClick={e => history.push('/biography')}>View Biography</button>
            </div>
        </div>
        <div className="col-lg-4 p-0 l-s-w" />
    </div>
    <div className="col-1 l-s-1 p-0">
        <hr />
        {list.map((i, k) => <div className="svg" key={k} onClick={e => window.open(i.u)} style={{ backgroundImage: `url(${i.i})` }} />)}
    </div>
</div>