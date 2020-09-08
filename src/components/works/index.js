import React from 'react';
import './style.css';
import RCT from '../../assets/react.svg';
import JS from '../../assets/javascript.svg';
import CSS from '../../assets/css.svg';
import MDB from '../../assets/mongodb.svg';
import NODE from '../../assets/nodejs.svg';
import RDX from '../../assets/redux.svg';
import HTML from '../../assets/html-5.svg';
import BS from '../../assets/bootstrap-4.svg';

var list = [
    { name: 'File-O', url: 'https://fileodev.cwaret.com', year: '2020', p: 'File-O is a file management system that provides employee management, project management and file storage solutions at effective cost. It provides the organization administrator with a separate dashboard to manage and review their employees. It also provides personal storage, file versioning, file sharing and audio/video recording features to each individual user.' },
    { name: 'Documentation', url: 'https://fileodev.cwaret.com:4242', year: '2020', p: 'File-O documentation is a website that works as a guideance and provides detailed walk-through to the users of File-O. The website contains each topics which are then divided into multiple steps with images to provide proper guidance to the users.' },
]

var icons = [[RCT, NODE, RDX, MDB, JS, BS, HTML, CSS], [RCT, JS, BS, HTML, CSS]]
export default () => <div className="wk-w">
    {list.map((i, k) => <div className="projs" key={k} style={{ marginTop: i.m, animation: `${k % 2 === 0 ? 'slideInL' : 'slideInR'} ${1 * (k + 1)}s` }}>
        <h1 className="h">{i.year}</h1>
        <div className="p-sub">
            <h1>{i.name}</h1>
            <p>{i.p}</p>
            <div className="flex-wrap">
                {icons[k].map(j => <img src={j} alt="language" />)}
            </div>
            <a href={i.url} rel="noopener noreferrer" target="_blank" className="b-d">Launch<div className="link" /></a>
        </div>
    </div>)}
</div>
