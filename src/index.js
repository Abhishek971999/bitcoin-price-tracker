import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
