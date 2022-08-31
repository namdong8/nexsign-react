import 'babel-polyfill'
// IE9의 경우 
import 'react-app-polyfill/ie9'; 
import 'react-app-polyfill/stable'; 

// IE11의 경우 
import 'react-app-polyfill/ie11'; // 추가
import 'react-app-polyfill/stable'; // 추가

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const React = require("react");
const ReactDom = require("react-dom");
const React_test = require("./react_test");
import style from './app.css'

ReactDom.render(<React_test />, document.querySelector("#root"));