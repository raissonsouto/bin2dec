import React, { Component } from 'react'
import Close from './close.png'

export default class InputField extends Component {

    getStyleInputField = () => {
        return {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start'
        }
    }

    getStyleTextarea = () => {
        return {
            width: '100%',
            height: '100%',
            backgroundColor: '#00000000',
            border: 'none',
            resize: 'vertical',
            padding: '20px 0px 20px 20px',
            color: '#eee',
            fontSize: 30,
        }
    }

    getStyleClose = () => {
        return {
            display: this.props.input != '' ? 'block' : 'none',
            width: 15,
            margin: 15,
            cursor: 'pointer'
        }
    }

    render() {
        return (
            <div style={this.getStyleInputField()}>
                <textarea
                    style={this.getStyleTextarea()}
                    value={this.props.input}
                    onChange={this.props.onChange}
                />
                <div onClick={this.props.erase}>
                    <img style={this.getStyleClose()} src={Close} alt='switch' />
                </div>
            </div>
        )
    }
}
