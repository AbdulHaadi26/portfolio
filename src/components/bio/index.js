import React from 'react';
import './style.css';

var list = [
    {
        name: 'BS Software Engineering', inst: 'NUML, Islamabad', year: '2016-2020', l: ['Developed an Android application NUML Essentials that provides profile management, instant SGPA Calculator, SGPA storage for each semester and CGPA calculator. The application was developed in Java and Sqlite was used as a database.',
            'In our Final Year Project we developed a Web portal and Android application named Share & Care. The main features of the applications were ride sharing, food sharing, community sharing, sports sharing, user profile, user rating and emergency alerts. The technology used were Angular 7 (Front-end), Node (Backend), Java (Android), Socket.IO (Real time functionalities), Google maps (Real time location), Firebase push notifications (Notifications) and Google cloud storage (Image storage).', 'Developed 3 projects with basic functionalities for learning with React/Redux.', 'Learned basics of C++, C#, Python.', 'Learned basic MySql and Joins as a Database.', 'Developed a static gaming website in HTML, CSS, Bootstrap and JQuery.',]
    }, {
        name: 'Full Stack Developer', year: '2020-Present', inst: 'Cware Technologies, Islamabad', l: [`Developed File-O which is a file management, team collaboration and storage solution that provides synchronized services among multiple device to enterprises of any size.
        It allows the administrators to manage and share files across organization, project managers to streamline their managerial tasks and documents, help employees with personal storage spaces and collaboration in projects. Administrator, Project Manager and Employee are the pre-defined responsibilities that are created as soon as the registration process completes. An administrator/project managers will manage and control all the access rights for employees. 
        React/Redux were the frameworks used for front-end and  backend was developed in Node/Express. MongoDB was used as the main database storage while MySql was used to store critical information of the clients. AWS S3 pre-signed url were used later on to relieve the server of the load of file uploading/downloading. It primarily consists of User dashboard, Super Admin dashboard, documentation website and a registration app.`,
            'Developed a Progressive web application File-O and implemented caching strategy.', 'Write clean and resuable code.', 'Expertise in both Class and Function based components.', 'Deploying and maintaing multiple applications updates and their databases on AWS.',
            'Deployed web applications on Heroku, AWS and Firebase', 'Good experience in optimization techniques such as Lazy Loading, Image optimization, minimal use of Libararies and Caching strategies.', 'Learned to create SystemCtl services to avoid using Forever and PM2.', 'Used Media recorder api for recording audios/videos', 'Uploaded files using fs, Multer, AWS Sdk, Presigned Urls and implemented multiple files Upload, Download, Cut, Copy and Delete functionalities', 'Used git as a versioning tool for updating code progress.', 'Working experience on Linux, Mongo shell, MySql shell, Heroku cli, Firebase Cli and Google Cloud cli.',
            'Currently learning and implementing animations in React.js', 'Currently shifting our instances and storage to Oracle cloud.'

        ]
    },
]

export default () => <div className="e-w">
    {list.map((i, k) => <div className="projs" key={k} style={{ marginTop: i.m, animation: `${k % 2 === 0 ? 'slideInL' : 'slideInR'} ${1 * (k + 1)}s` }}>
        <h1 className="h">{i.year}</h1>
        <div className="p-sub">
            <h1>{i.name}</h1>
            <h3>{i.inst}</h3>
            <ul>
                {i.l.map((j, k) => <li key={k}>{j}</li>)}
            </ul>
        </div>
    </div>)}
</div>
