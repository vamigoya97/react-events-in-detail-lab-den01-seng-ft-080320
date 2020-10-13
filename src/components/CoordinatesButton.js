// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    eventHandler = (event) => {
        const coordArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordArray)
    }

    render() {
        return( 
            <button
            onClick={this.eventHandler}
            >Get Coordinates</button>
        )
    }
}