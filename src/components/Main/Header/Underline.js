import React, { Component } from 'react'

export default class Underline extends Component {

    getStyle () {
        return ({
            position: 'relative',
            left: this.props.left,
            height: 3,
            width: this.props.width,
            backgroundColor: '#08f',
            transform: 'translateY(-2px)',
            transition: '0.3s'
        })
    }

    render () {
        return (
            <div style={this.getStyle()}></div>
        )
    }
}