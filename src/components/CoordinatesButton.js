import React, { Component } from 'react';
export default class CorrdinatesButton extends Component {
    handleClick= (event) => {
        const x = event.clientX
        const y = event.clientY

        this.props.onReceiveCoordinates([x, y])
    }

    render() {
        return (
            <div>
                <button onClick= {this.handleClick}>click button</button>
            </div>
        )
    }
}