import React from 'react';
import HTML from '../../assets/html-5.svg';
import RCT from '../../assets/react.svg';
import JS from '../../assets/javascript.svg';
import CSS from '../../assets/css.svg';
import MDB from '../../assets/mongodb.svg';
import NODE from '../../assets/nodejs.svg';
import RDX from '../../assets/redux.svg';
import PWA from '../../assets/pwa.svg';
import AWS from '../../assets/aws.svg';
import RESP from '../../assets/computer.svg';
import LOCK from '../../assets/lock.svg'
import CC from '../../assets/cloud-computing.svg';
import REC from '../../assets/record.svg';
import './style.css';
var list = [{ name: 'React.js', per: 90, logo: RCT }, { name: 'Node.js', per: 88, logo: NODE }, { name: 'Redux.js', per: 75, logo: RDX }, { name: 'HTML5', per: 80, logo: HTML }, { name: 'MongoDB', per: 90, logo: MDB }, { name: 'Javascript', per: 85, logo: JS }, { name: 'CSS3', per: 90, logo: CSS }]
var list2 = [{ name: 'Progressive Web App', logo: PWA, txt: 'Developed File-O A Progressive Web Application.' }, { name: 'Responsive Design', logo: RESP, txt: 'Crafted Pixel Perfect Designs For Multiple Screens.' }
   , { name: 'Amazon Services', logo: AWS, txt: 'Deployed And Performed Dev Operations On AWS Server. ' }, { name: 'HTTPS Conversion', logo: LOCK, txt: 'Generating And Maintaing SSL Certificates For Node.js Apps.' },
{ name: 'Multer / AWS S3', logo: CC, txt: 'Worked With Multer, fs, AWS SDK And Pre-signed Urls.' }, { name: 'Media Recorder Api', logo: REC, txt: 'Built A Video And Audio Recording Feature in File-O.' }];


export default () => <div className="se-w">
   <div className="se-s-w">
      <div className="se-1">
         {rL()}
      </div>
      <div className="se-2">
         <div className="se-2-s">
            {rC()}
         </div>
      </div>
   </div>
</div>

function rL() {
   return list.map((i, k) => <div className="sk-w" key={k} style={{ animation: `slideInB ${0.3 * (k + 1)}s` }}>
      <img src={i.logo} alt="Language" />
      <div className="sk-sub">
         <div className="sk-row">
            <h6 className="sk-h">{i.name}</h6>
            <h6 className="sk-sh">{i.per}</h6>
         </div>
         <div className="pb">
            <div className="pb-fill" style={{ maxWidth: `${i.per}%`, animation: `fillP ${1 * (k + 1)}s` }} />
         </div>
      </div>
   </div>)
}

function rC() {
   return list2.map((i, k) => <div key={k} className="card" style={{ animation: `slideInR ${0.3 * (k + 1)}s` }}>
      <img src={i.logo} alt={i.name} />
      <h6>{i.name}</h6>
      <p>{i.txt}</p>
   </div>)
}