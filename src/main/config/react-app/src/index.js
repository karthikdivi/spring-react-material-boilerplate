import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MuiApp from './MuiApp';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter basename="/app">
    <MuiApp />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
