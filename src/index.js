import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RandomBox from './RandomBox'
import Hello from './Hello'
import RecipePage from './RecipePage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RecipePage />, document.getElementById('root'));
registerServiceWorker();
