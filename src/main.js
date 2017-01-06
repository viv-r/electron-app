const React = require('react')
const ReactDOM = require('react-dom')

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }

        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    render() {
        return React.createElement(
            'div',
            {
                style: {
                    backgroundColor: 'rgb(34, 35, 47)',
                    color: '#fff',
                    fontSize: '64',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            },
            `${this.state.time.getHours()}:${this.state.time.getMinutes()}:${this.state.time.getSeconds()}`
        )
    }
}

ReactDOM.render(React.createElement(Main), document.getElementById('root'))
