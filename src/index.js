// setState 是异步的
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }

        // this.fn = this.fn.bind(this)
    }

    render() {
        return (
            <div>
                { this.state.count }
                <button onClick={ this.fn.bind(this) }>加10</button>
            </div>
        )
    }

    fn() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            // 异步回调，当数据修改完成之后触发
            console.log(this.state.count)
        })

        
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
