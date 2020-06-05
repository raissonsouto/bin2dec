import React, { Component, createRef } from 'react'
import './body.css'

export default class OutputField extends Component {

    getStyle = () => {
        return {
            width: '100%',
            height: '100%',
            maxHeight: '800px',
            padding: 15,
            display: this.props.output != ''? 'block' : 'none',
            backgroundColor: '#1c1c1c',
            fontSize: 30,
            color: '#eee',
            borderBottomRightRadius: 10,
            wordBreak: 'break-all',
        }
    }

    ref = createRef()

    componentWillUpdate () {
        this.props.setHeight(this.ref.current.offsetHeight)
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <div ref={this.ref}>{this.props.output}</div>
            </div>
        )
    }
}
