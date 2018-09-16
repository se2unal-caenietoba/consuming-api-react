import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Kitties from './components/Kitties';
import Other from './components/Other';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route  path='/' component={App} />
            <Route  path='/kitties' component={Kitties}/>
            <Route  path='/other' component={Other}/>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();