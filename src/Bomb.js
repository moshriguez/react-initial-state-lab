import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    countDown = () => {
        const newCount = this.state.secondsLeft - 1
        this.setState({secondsLeft: newCount})
    }



    boom = () => {
        if (this.state.secondsLeft === 0) {
            return 'Boom!'
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    render() {
        return (<div onLoad={setTimeout(this.countDown, 1000)}>
            {this.boom()}
        </div>)
    }
}

export default Bomb