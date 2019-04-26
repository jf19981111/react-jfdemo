import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// 使用 JSX 语法
// ReactDOM.render(
//     <div>
//         <h1>Hello React</h1>
//         <p>这是一个屁</p>
//     </div>, 
//     document.getElementById('root')
// );

// 不使用 JSX 语法
ReactDOM.render(
    React.createElement('div', null, [
        React.createElement('h1', { key: 100 }, 'Hello React'),
        React.createElement('p', { key: 101 }, '这是一个屁')
    ]),
    document.getElementById('root')
);
