import React from 'react';
import ReactDOM from 'react-dom';


console.log("APP.js is running!!!");

let template = <div><h1>Webpack</h1><p>Does this change?</p></div>
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)