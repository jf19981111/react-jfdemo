// JSX 语法
 import React from 'react'
 import ReactDOM from 'react-dom'
 import Logo from './logo.svg'


 const isLogin = true
 var tmp = '<h1>这是一个大大的H1</h1>'
 ReactDOM.render(
     <div>
         <img src={ Logo } alt=""/>
         <label htmlFor="hh">用户名</label>
         <input type="text" id="hh"/>

        {
            isLogin ? <button>登录</button> : ''
        }
        {/* 为什么是双花括号，一个大括号表示要用变量，然后这个变量是一个对象 */}
        <div dangerouslySetInnerHTML={{ __html: tmp }}></div>
     </div>,
     document.getElementById('root')
 )
