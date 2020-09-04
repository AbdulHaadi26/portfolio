import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import FB from '../../assets/fbB.svg';
import IN from '../../assets/inB.svg';
import LK from '../../assets/lnkB.svg';
import './style.css';
import history from '../../utils/history';
var list = [{ i: FB, u: 'https://web.facebook.com/AbdulHadiSpeedster' }, { i: IN, u: 'https://github.com/AbdulHaadi26' }, { i: LK, u: 'https://www.linkedin.com/in/abdulhaadirana' }];

export default props => {
    const { i, n, isN, setV } = props;

    function handleRed(i) {
        history.push(i === 1 ? 'biography' : 'home');
    }

    return <div className={`nav ${n > 0 ? 'st shdw' : ''}`}>
        <div className="n col-lg-8 col-11">
            <h6 className="h mr-auto">Ah.</h6>
            <div className="sub" onClick={e => setV(!isN)}>
                <div className={n > 0 ? 'svg-m2' : 'svg-m'} />
                <h6 className="sh">MENU</h6>
            </div>
        </div>
        {isN && <div className={`bg ${n < 1 ? 'sN' : 'sNB'}`} onClick={e => setV(!isN)} />}
        <CSSTransition in={isN} classNames="d" timeout={{ enter: 200, exit: 100 }} unmountOnExit appear>
            <div className="sNS">
                <div className="svg-x" onClick={e => setV(!isN)} />
                {['HOME', 'BIOGRAPHY'].map((k, j) => <h6 className={`l ${i === j ? 'a' : ''}`} onClick={e => i !== j && handleRed(j)} key={j}>{k}</h6>)}
                <div className="icons">
                    {list.map((i, k) => <div className="svg" key={k} onClick={e => window.open(i.u)} style={{ backgroundImage: `url(${i.i})` }} />)}
                </div>
            </div>
        </CSSTransition>
    </div>
}