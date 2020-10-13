// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    eventHandler = (event) => {
        setTimeout(this.props.onDelayedClick, this.props.delay, event.target)
    }

    render() {
        return (
            <button
            onClick={this.eventHandler}
            >Get Delayed Event</button>
        )
    }
}