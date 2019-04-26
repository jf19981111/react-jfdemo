// Jfdemo 组件

import React from 'react'

// 引入样式
import './jfdemo.css'

class Jfdemo extends React.Component {

    constructor () {
        super()
        this.state = {
            fruits: [
                // '草莓',
                // '芒果',
                // '樱桃'
            ],
            inputVal: ''
        }
    }

    render () {
        return (
            <div className="warp">
                <input type="text" value={ this.state.inputVal } onChange={ this.chgVal.bind(this) } />
                <button className="btn" onClick={ this.add.bind(this) }>ADD</button>

                <ul>
                    {/* <li>草莓</li>
                    <li>芒果</li> */}
                    {
                        this.state.fruits.map((item,index) => {
                            return <li key={index} onClick={ this.del.bind(this,index) }>{ item }</li>
                        })
                    }
                    
                    {/* {
                        [ <li>草莓</li>, <li>芒果</li> ]
                    } */}

                </ul>
            </div>
        )
    }

    /**
     * add 的添加方法
     */
    add () {
        console.log('add点击')
        this.setState({
            // fruits: this.state.fruits.concat(this.state.inputVal),
            fruits: [...this.state.fruits, this.state.inputVal],
            inputVal: ''
        })
    }

    /**
     * 从 fruits 数组中删除某个元素
     * 根据下标来删除，那么如何获取下标
     * - 通过bind的第二个参数，方式传递的
     * @param {Number} index 当前要删除 fruits 中的元素的下标位置
     *  
     */
    del (index) {
        // console.log('====')
        // 1. 取出 fruits 中的数据
        /* 
            为什么要使用拷贝的方式呢？
            因为在 react 中，props 不能修改，然后 state 也不允许直接修改，只能做替换的操作
            可以使用 拷贝的方式，先将 state 中的 fruits 给复制一份
        */ 
       // 在 react 中 事件处理函数中的 this 默认指向 undefined
        let fruits = [...this.state.fruits]
        fruits.splice(index,1)
        this.setState({
            fruits: fruits
        })
    }

    /**
     * chgVal 改变 inputVal
     */
    chgVal (eve) {
        // console.log(eve.target.value)
       this.setState({
           // 获取到 input 上的 value 值，要通过事件对象
           inputVal: eve.target.value 
       })
    }
}

export default Jfdemo
