//import React
import React from 'react';
//import ReactDOM
import ReactDOM from 'react-dom';
//import App
import Main from './Main';
//import DrawerNav.css from DrawerNav folder
import './DrawerNav/DrawerNav.css';
import { transitionVariants, transition } from './settings'

ReactDOM.render(<Main role="test" transitionVar={transitionVariants} transition={transition} />, document.getElementById('root'));

