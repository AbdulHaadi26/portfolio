import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './bootstrap.css';
import { Router } from 'react-router-dom';
import browserHistory from './utils/history'

ReactDOM.render(
            <Router history={browserHistory}>
                <App />
            </Router>
    , document.getElementById('root'));

serviceWorker.register();
