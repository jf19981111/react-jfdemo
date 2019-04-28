// item 的组件 

import React from 'react'

class Jfitem extends React.Component {
    render () {
        const {text,} = this.props
        return (
            <div>
                <li onClick={ this.childDel.bind(this) }>
                    { text }
                </li>
            </div>
        )
    }

    childDel () {
        const { del, index } = this.props
        // 要删除 父组件中的某一项
        // 那么要怎么进行呢？因为没办法操作父亲的数据，只能跟父组件打招呼
        del(index)
    }

}

export default Jfitem
