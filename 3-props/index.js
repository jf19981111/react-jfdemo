// 组件
import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

// 函数组件
function Hello({ name, age, child }) {
    // console.log(props)
    return (
        <div>
            <h1>Hello React</h1>
            <p>name：{ name }</p>
            <p>age: { age }</p>
            <World name="三傻子" age={20}></World>
            { child }
        </div>
    )
}

// 函数组件的默认值
Hello.defaultProps = {
    list: [1,2,3]
}

// 函数组件的校验
Hello.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    child: PropTypes.element
}

// 类的组件
class World extends React.Component {
    render () {
        return (
            <div>
                <p>我是一个屁</p>
                <p>{ this.props.name }</p>
                <p>{ this.props.age }</p>
            </div>
        )
    }
}

// 类组件的默认值
World.defaultProps = {
    sex:'nan'
}

// 类的组件的 props 校验
World.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

ReactDOM.render(
    <Hello name="二愣子" age={18} child={ <p>ReactElement</p> }></Hello>,
    document.getElementById('root')
)
