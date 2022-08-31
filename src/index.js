import 'babel-polyfill'
// index.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// public/index.html 파일에서 root아이디를 가진 DOM에 랜더
ReactDom.render(<App />, document.getElementById('root'));