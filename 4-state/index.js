// 组件的 state （状态） 可以理解为vue 中 data 中的数据

import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
    // 类可以定义构造函数，如果定义的话，就必须在构造函数中调用 父类的构造函数，
    // 也就是 super()
    constructor (props) {
        super(props)

        this.state = {
            name: 'zhangsan',
            age: 18
        }
    }

    render () {
        console.log('加菲猫')

        return (
            <div>
                <h1>jfm</h1>
                <p>{ this.state.name }</p>
                <p>{ this.state.age }</p>
                {/* 
                    这里面的都可以看做是组件，因为在 react 中都是虚拟的，所以 onClick 可以看做是一个 props 
                */}
                {/* <button onClick={ this.fn().bind(this) }>我要修改自己的name可以吗？yes</button> */}
                <button onClick={ () => { this.setState({ name: '三傻子' }) } }>修改name</button>
            </div>
        )
    }

    fn () {
        console.log('触发了 fn')
        return function() {
            console.log('=====在这里====')
            console.log(this) // undefined
            // this.state.name = '三傻子'
            this.setState({
                name: '三傻子'
            })
        }
    }
}

ReactDOM.render(
    <div>
        <Hello></Hello>
    </div>,
    document.getElementById('root')
)
