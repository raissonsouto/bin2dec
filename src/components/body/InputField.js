import React, { Component } from 'react'
import Close from './close.png'
import './body.css'

export default class InputField extends Component {

    render() {
        return (
            <div className='inputField'>
                <textarea
                    className='textarea'
                    value={this.props.input}
                    onChange={this.props.onChange}
                />
                <div onClick={this.props.erase} className={this.props.input != '' ? 'erase' : 'notErase'}>
                    <img className='img' src={Close} alt='erase' />
                </div>
            </div>
        )
    }
}
