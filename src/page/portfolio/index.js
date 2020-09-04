import React, { useEffect, useState } from 'react';
import './style.css';
import Navbar from '../../components/navbar';
import L from '../../components/bio-landing';
import B from '../../components/bio';
import H from '../../components/hobbies';
import C from '../../components/contact';
var list = ['Timeline', 'Certifications', 'Contact'];
export default () => {
    const [n, setN] = useState(0), [navC, setNC] = useState(0), [isN, setIN] = useState(false);

    useEffect(() => {
        let hS = () => {
            isN && setIN(!isN);
            (n < Math.floor((window.pageYOffset + 100) / window.innerHeight)) && setN(Math.floor((window.pageYOffset + 100) / window.innerHeight));
            setNC(Math.floor((window.pageYOffset + 100) / window.innerHeight));
        }
        window.addEventListener("scroll", hS);
        return () => window.removeEventListener("scroll", hS);
    }, [n, setN, isN, setIN, navC]);

    function setVal(val) { setIN(val); }

    return <div className="container-fluid">
        <div className="row">
            <Navbar i={1} n={navC} setV={setVal} isN={isN} />
            <L />
        </div>
        {[<B />, <H />, <C />].map((i, k) => <div className={`row ${k === 2 ? 'mH' : ''}`} key={k}>
            <div className="sup-h">
                <h6 className="sup-ah">0{k + 1}</h6>
                <div className="sup-sub-h">
                    <hr />
                    <h6 className="sup-sh">{list[k]}</h6>
                </div>
            </div>
            {k < n && i}
        </div>)}
    </div>
}

