import React from 'react';
// 这里是不需要使用 ReactDOM的
import logo from './logo.svg';
// webpack 玩图片，都需要将图片使用模块的方式引入进来
import './App.css';

// 函数的方式定义组件， return出去的就是组件的模板内容
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
