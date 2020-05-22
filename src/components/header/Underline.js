import React, { Component } from 'react'

export default class Underline extends Component {

    constructor(props) {
        super(props)
        this.state = { width: this.props.underline.width, pos: this.props.underline.pos}
    }

    getStyle() {

        return {
            position: 'relative',
            left: this.state.pos,
            height: 3,
            width: this.state.width,
            backgroundColor: '#08f',
            transform: 'translateY(-2px)'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}></div>
        )
    }
}