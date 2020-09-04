import React from 'react';
import HR from '../../assets/hr.webp';
import LN from '../../assets/ln.png';
import './style.css';
var list = [{ n: 'React (Basic)', url: 'https://www.hackerrank.com/certificates/1d91924936aa', img: HR }, { n: 'Javscript (Basic)', url: 'https://www.hackerrank.com/certificates/b5d980367e69', img: HR }, { n: 'Rest Api (Intermediate)', url: 'https://www.hackerrank.com/certificates/d8a6e2e02ac8', img: HR }, { n: 'Learning Full-Stack JavaScript Development: MongoDB, Node, and React', url: 'https://drive.google.com/file/d/1RKrQpbM4wCFp5amMNsyUH9pVy25rX7eK/view?usp=sharing', img: LN }]

export default () => <div className="h-w">
    <div className="h-r col-lg-10">
        {list.map((i, k) => <div className="card-cert col-lg-4" key={k} style={{ animation: `${k % 2 === 0 ? 'slideInL' : 'slideInR'} ${1 * (k + 1)}s` }}>
            <img src={i.img} alt={i.n}  onClick={e => window.open(i.url)} />
            <h6 onClick={e => window.open(i.url)}>{i.n}</h6>
        </div>)}
    </div>
</div>

